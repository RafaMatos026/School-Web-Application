import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true })
  ClassName: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
  })
  Subject: Subject;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  HeadTeacher: User;

  @Prop()
  AssignedStudents: [{ type: mongoose.Schema.Types.ObjectId; ref: 'User' }];

  @Prop()
  AssignedTeachers: [{ type: mongoose.Schema.Types.ObjectId; ref: 'User' }];

  @Prop({ default: true })
  Status: boolean;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
