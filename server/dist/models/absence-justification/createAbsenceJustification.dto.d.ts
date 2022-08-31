import { ObjectId } from "mongoose";
export declare class CreateAbsenceJustificationDto {
    studentId: ObjectId;
    classId: ObjectId;
    DateAdded: Date;
    fileUrl: string;
}
