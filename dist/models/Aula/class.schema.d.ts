import mongoose, { Document } from 'mongoose';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
export declare type ClassDocument = Class & Document;
export declare class Class {
    ClassName: string;
    Subject: Subject;
    HeadTeacher: User;
    AssignedStudents: [{
        type: mongoose.Schema.Types.ObjectId;
        ref: 'User';
    }];
    AssignedTeachers: [{
        type: mongoose.Schema.Types.ObjectId;
        ref: 'User';
    }];
    Status: boolean;
}
export declare const ClassSchema: mongoose.Schema<Class, mongoose.Model<Class, any, any, any, any>, {}, {}, {}, {}, "type", Class>;
