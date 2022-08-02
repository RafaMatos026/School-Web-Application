import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Subject } from '../Subject/subject.schema';
import { Summary } from '../Summary/summary.schema';
import { User } from '../User/user.schema';
export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop()
  ClassName: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  })
  Subject: Subject;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  HeadTeacher: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Summary' })
  Summarys: Summary[];

  @Prop({ default: true })
  Status: boolean;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
