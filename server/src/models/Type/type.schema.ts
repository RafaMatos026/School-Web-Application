import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type TypeDocument = Type & Document;

@Schema()
export class Type {
  @Prop({ required: true })
  Description: string;
}

export const TypeSchema = SchemaFactory.createForClass(Type);
