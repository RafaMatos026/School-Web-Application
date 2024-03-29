import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop({ required: true })
  Description: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
