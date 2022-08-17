import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true })
  ClassName: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  Subject: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  HeadTeacher: ObjectId;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  AssignedStudents: ObjectId[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  AssignedTeachers: ObjectId[];

  @Prop({ default: true })
  Status: boolean;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
