import mongoose, { Document } from 'mongoose';
import { Class } from '../Aula/class.schema';
import { User } from '../User/user.schema';
export declare type PresenceDocument = Presence & Document;
export declare class Presence {
    Present: boolean;
    classId: Class;
    studentId: User;
}
export declare const PresenceSchema: mongoose.Schema<Presence, mongoose.Model<Presence, any, any, any, any>, {}, {}, {}, {}, "type", Presence>;
