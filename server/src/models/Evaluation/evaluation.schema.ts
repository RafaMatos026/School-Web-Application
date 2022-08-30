import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, ObjectId } from "mongoose";
export type EvaluationDocument = Evaluation & Document;

@Schema()
export class Evaluation {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  teacherId: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Class" })
  classId: ObjectId;

  @Prop()
  DateAdded: Date;

  @Prop({ required: true })
  fileUrl: string;
}

export const EvaluationSchema = SchemaFactory.createForClass(Evaluation);
