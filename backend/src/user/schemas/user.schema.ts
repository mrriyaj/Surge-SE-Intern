import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  
  @Prop({ required: true })
  id: number;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  mobile: number;

  @Prop()
  status: boolean;

  @Prop()
  password: string;

  @Prop()
  accountType: string;

  @Prop()
  completedAt: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);