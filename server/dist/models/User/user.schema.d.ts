import { Document, ObjectId } from 'mongoose';
import mongoose from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    Birthday: Date;
    Status: boolean;
    Registered: boolean;
    MyClasses: ObjectId[];
    AccountType: ObjectId;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
