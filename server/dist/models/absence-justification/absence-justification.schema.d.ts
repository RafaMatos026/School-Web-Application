import mongoose, { Document, ObjectId } from "mongoose";
export declare type AbsenceJustificationDocument = AbsenceJustification & Document;
export declare class AbsenceJustification {
    studentId: ObjectId;
    classId: ObjectId;
    DateAdded: Date;
    fileUrl: string;
}
export declare const AbsenceJustificationSchema: mongoose.Schema<AbsenceJustification, mongoose.Model<AbsenceJustification, any, any, any, any>, {}, {}, {}, {}, "type", AbsenceJustification>;
