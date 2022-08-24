import mongoose, { Document, ObjectId } from 'mongoose';
export declare type PresenceDocument = Presence & Document;
export declare class Presence {
    Date: Date;
    classId: ObjectId;
    absentStudents: ObjectId[];
    presentStudents: ObjectId[];
    open: boolean;
}
export declare const PresenceSchema: mongoose.Schema<Presence, mongoose.Model<Presence, any, any, any, any>, {}, {}, {}, {}, "type", Presence>;
