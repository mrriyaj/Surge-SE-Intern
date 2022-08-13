import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/user/dto/new-user.dto';
import { UserDetails } from '../user/user-details.interface';
import { exisitingUserDTO } from 'src/user/dto/existing_user.dto';
import { JwtService } from '@nestjs/jwt';
import { generate } from 'generate-password';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private mailService: MailerService,
  ) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async register(
    user: Readonly<NewUserDTO>,
  ): Promise<UserDetails | null | string> {
    var password = generate({
      length: 12,
      numbers: true,
    });

    var accountType = 'student';
    var state = false;

    const { email } = user;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser){ 
      return JSON.parse(JSON.stringify({ status: 'no' ,alert: 'Email Alrady Register!' }))
    
    };

    const hashedPassword = await this.hashPassword(password);

    await this.userService.create(
      email,
      hashedPassword,
      accountType,
      state,
    );

    await this.mailService.sendMail({
      to: email,
      from: 'admin@mrpos.online',
      subject: 'User account created Successfully',
      html: '<b>Login Url  : </b> http://127.0.0.1:3000/login' + '<br><b>Email  :  </b>' + email + '<br> <b>password   :  </b>' + password,
    });


    return JSON.parse(JSON.stringify({ status: 'ok' , alert: 'Register Successfully' }));;

  }

  async doesPasswordMatch(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async validateUser(
    _id: string,
    email: string,
    password: string,
    accountType: string,
    state: boolean,
  ): Promise<UserDetails | null> {
    const user = await this.userService.findByEmail(email);
    const doesUserExist = !!user;

    if (!doesUserExist) return null;

    const doesPasswordMatch = await this.doesPasswordMatch(
      password,
      user.password,
    );
    var accountType = user.accountType;
    state = user.state;
    _id = user._id;

    if (!accountType) return null;
    if (!doesPasswordMatch) return null;

    return this.userService._getUserDetails(user);
  }

  async login(
    existingUser: exisitingUserDTO,
  ): Promise<{ token: string } | null> {
    const { _id, email, password, accountType, state } = existingUser;

    const user = await this.validateUser(
      _id,
      email,
      password,
      accountType,
      state,
    );

    if (!user) return null;

    const jwt = await this.jwtService.signAsync({ user });

    var objJson = JSON.parse(JSON.stringify({ status: 'ok', data: jwt }));

    return objJson;
  }
}
