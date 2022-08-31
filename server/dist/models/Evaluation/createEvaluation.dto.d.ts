import { ObjectId } from "mongoose";
export declare class CreateEvaluationDto {
    EvaluationName: string;
    DateAdded: Date;
    Description: string;
    teacherId: ObjectId;
    classId: ObjectId;
    fileUrl: string;
}
