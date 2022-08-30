import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, ObjectId } from "mongoose";
export type AbsenceJustificationDocument = AbsenceJustification & Document;

@Schema()
export class AbsenceJustification {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  studentId: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "Class" })
  classId: ObjectId;

  @Prop()
  DateAdded: Date;

  @Prop({ required: true })
  fileUrl: string;
}

export const AbsenceJustificationSchema =
  SchemaFactory.createForClass(AbsenceJustification);
