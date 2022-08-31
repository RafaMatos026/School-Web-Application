import mongoose, { Document, ObjectId } from "mongoose";
export declare type EvaluationDocument = Evaluation & Document;
export declare class Evaluation {
    EvaluationName: string;
    teacherId: ObjectId;
    classId: ObjectId;
    Description: string;
    DateAdded: Date;
    fileUrl: string;
}
export declare const EvaluationSchema: mongoose.Schema<Evaluation, mongoose.Model<Evaluation, any, any, any, any>, {}, {}, {}, {}, "type", Evaluation>;
