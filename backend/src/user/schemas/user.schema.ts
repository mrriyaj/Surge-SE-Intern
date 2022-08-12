import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  mobile: number;

  @Prop()
  state: boolean;

  @Prop({ required: true })
  password: string;

  @Prop()
  accountType: string;

}

export const UserSchema = SchemaFactory.createForClass(User);