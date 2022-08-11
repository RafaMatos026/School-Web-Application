import mongoose, { Document, ObjectId } from 'mongoose';
export declare type PresenceDocument = Presence & Document;
export declare class Presence {
    Present: boolean;
    classId: ObjectId;
    studentId: ObjectId;
    open: boolean;
}
export declare const PresenceSchema: mongoose.Schema<Presence, mongoose.Model<Presence, any, any, any, any>, {}, {}, {}, {}, "type", Presence>;
