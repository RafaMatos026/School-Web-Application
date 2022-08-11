import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import mongoose from 'mongoose';
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  FName: string;

  @Prop()
  LName: string;

  @Prop()
  Email: string;

  @Prop()
  Password: string;

  @Prop({ default: null })
  Birthday: Date;

  @Prop({ default: false })
  Status: boolean;

  @Prop({ default: false })
  Registered: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  MyClasses: ObjectId[];

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  AccountType: ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
