import { ObjectId } from "mongoose";
export declare class CreateEvaluationDto {
    EvaluationName: string;
    DateAdded: Date;
    teacherId: ObjectId;
    classId: ObjectId;
    fileUrl: string;
}
