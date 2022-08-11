import mongoose, { Document, ObjectId } from 'mongoose';
export declare type ClassDocument = Class & Document;
export declare class Class {
    ClassName: string;
    Subject: ObjectId;
    HeadTeacher: ObjectId;
    AssignedStudents: [{
        type: mongoose.Schema.Types.ObjectId;
    }];
    AssignedTeachers: [{
        type: mongoose.Schema.Types.ObjectId;
    }];
    Status: boolean;
}
export declare const ClassSchema: mongoose.Schema<Class, mongoose.Model<Class, any, any, any, any>, {}, {}, {}, {}, "type", Class>;
