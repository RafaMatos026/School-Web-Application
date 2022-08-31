import { Document, ObjectId } from "mongoose";
import mongoose from "mongoose";
export declare type WorkDocument = Work & Document;
export declare class Work {
    WorkName: string;
    Description: string;
    DueDate: Date;
    AddedDate: Date;
    classId: ObjectId;
    userId: ObjectId;
    fileUrl: string;
}
export declare const WorkSchema: mongoose.Schema<Work, mongoose.Model<Work, any, any, any, any>, {}, {}, {}, {}, "type", Work>;
