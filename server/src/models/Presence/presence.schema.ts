import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
export type PresenceDocument = Presence & Document;

@Schema()
export class Presence {
  @Prop({ required: true, default: Date.now() })
  Date: Date;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  classId: ObjectId;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  })
  absentStudents: ObjectId[];

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  })
  presentStudents: ObjectId[];

  @Prop({ default: true })
  open: boolean;
}

export const PresenceSchema = SchemaFactory.createForClass(Presence);
