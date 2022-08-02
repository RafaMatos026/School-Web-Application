import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Class } from '../Aula/class.schema';

@Schema()
export class Summary {
  @Prop({ required: true })
  Date: Date;

  @Prop({ required: true })
  Description: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Class' })
  classId: Class;
}

export const SummarySchema = SchemaFactory.createForClass(Summary);
