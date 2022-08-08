import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  
  @Prop()
  id: number;

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
  status: boolean;

  @Prop({ required: true })
  password: string;

  @Prop()
  accountType: string;

}

export const UserSchema = SchemaFactory.createForClass(User);