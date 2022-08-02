import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Summary {
  @Prop({ required: true })
  Date: Date;

  @Prop({ required: true })
  Description: string;
}

export const SummarySchema = SchemaFactory.createForClass(Summary);
