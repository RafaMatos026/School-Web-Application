import { Document } from 'mongoose';
import { Type } from '../Type/type.schema';
import mongoose from 'mongoose';
import { Class } from '../Aula/class.schema';
export declare type UserDocument = User & Document;
export declare class User {
    FName: string;
    LName: string;
    Email: string;
    Password: string;
    Birthday: Date;
    Status: boolean;
    Registered: boolean;
    MyClasses: Class[];
    AccountType: Type;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
