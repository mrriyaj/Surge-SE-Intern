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
    constructor(private  jwtService: JwtService, private userService: UserService, private mailService: MailerService){}

    async hashPassword(password: string): Promise<string>{
        return bcrypt.hash(password,12);
    }

    async register(user:Readonly<NewUserDTO>): Promise<UserDetails | null | string>{
        
        var password = generate({
            length: 12,
            numbers: true
        })        
        
        const { email } = user;

        const existingUser = await this.userService.findByEmail(email);

        if (existingUser) return 'Email Alrady Register!'

        const hashedPassword = await this.hashPassword(password);

        const newUser = await this.userService.create(email,hashedPassword);

        var response = await this.mailService.sendMail({
            to:email,
            from:"riyajkafar@zohomail.com",
            subject: 'User account created Successfully',
            html: '<b>Login Url  : </b> http://127.0.0.1:3000/auth/login'+'<br><b>Email  :  </b>' + email + '<br> <b>password   :  </b>' + password
           });

        return this.userService._getUserDetails(newUser), response;
    }

    async doesPasswordMatch(password: string, hashedPassword:string):
    Promise<boolean>{
        return bcrypt.compare(password, hashedPassword);
    }

    async validateUser(email: string, password: string):
    Promise<UserDetails | null >{
        const user = await this.userService.findByEmail(email);
        const doesUserExist = !!user;

        if(!doesUserExist) return null;

        const doesPasswordMatch = await this.doesPasswordMatch(password, user.password)

        if(!doesPasswordMatch) return null;

        return this.userService._getUserDetails(user);
 
    }

    async login(existingUser: exisitingUserDTO,): Promise<{token: string} | null>{
        const {email, password} = existingUser;
        const user = await this.validateUser(email, password);

        if(!user) return null;

        const jwt = await this.jwtService.signAsync({ user });
        
        var objJson = JSON.parse(JSON.stringify({ status: "ok", data: jwt }));
        
        return objJson;

    }
}
