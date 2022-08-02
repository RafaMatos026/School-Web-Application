import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from '../Type/type.schema';
import mongoose from 'mongoose';
import { Class } from '../Aula/class.schema';
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  FName: string;

  @Prop({ required: true })
  LName: string;

  @Prop({ required: true })
  Email: string;

  @Prop({ required: true })
  Password: string;

  @Prop()
  Birthday: Date;

  @Prop({ default: false })
  Status: boolean;

  @Prop({ default: false })
  Registered: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Class' })
  MyClasses: Class[];

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
  })
  AccountType: Type;
}

export const UserSchema = SchemaFactory.createForClass(User);
