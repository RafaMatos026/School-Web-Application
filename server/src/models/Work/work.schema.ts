import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import mongoose from 'mongoose';
export type WorkDocument = Work & Document;

@Schema()
export class Work {
  @Prop({ required: true })
  WorkName: string;

  @Prop()
  Description: string;

  @Prop({ required: true })
  DueDate: Date;

  @Prop({ default: Date.now() })
  AddedDate: Date;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  classId: ObjectId;

  @Prop({ required: true })
  FilePath: string;

  @Prop()
  FileName: string;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
