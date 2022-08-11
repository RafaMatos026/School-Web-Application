import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
export type PresenceDocument = Presence & Document;

@Schema()
export class Presence {
  @Prop({ required: true, default: false })
  Present: boolean;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  classId: ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  studentId: ObjectId;

  @Prop({ default: false })
  open: boolean;
}

export const PresenceSchema = SchemaFactory.createForClass(Presence);
