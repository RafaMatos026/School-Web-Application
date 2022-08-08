import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Class } from '../Aula/class.schema';
import { User } from '../User/user.schema';
export type PresenceDocument = Presence & Document;

@Schema()
export class Presence {
  @Prop({ required: true, default: false })
  Present: boolean;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Class' })
  classId: Class;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  studentId: User;
}

export const PresenceSchema = SchemaFactory.createForClass(Presence);
