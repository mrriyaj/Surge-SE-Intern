import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/User.schema';
import { UserDetails } from './user-details.interface';
import { JwtModule } from '@nestjs/jwt';
import { request } from 'http';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) { }

  _getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      dateOfBarth: user.dateOfBirth,
      mobile: user.mobile,
      status: user.status,
      password: user.password,
      accountType: user.accountType,
    };
  }

  async create(email: string, hashedPassword: string): Promise<UserDocument> {
    const newUser = new this.userModel({
      email,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async createDetails(createUserDto: CreateUserDto): Promise<User> {
    return await new this.userModel({
      ...createUserDto,
    }).save();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

}

