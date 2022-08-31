import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

@Schema()
export class Summary {
  @Prop({ required: true })
  SummaryName: string;

  @Prop({ required: true })
  Date: Date;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  classId: ObjectId;

  @Prop({ required: true })
  Description: string;
}

export const SummarySchema = SchemaFactory.createForClass(Summary);
