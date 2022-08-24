import { ObjectId } from 'mongoose';
export declare class newSurveyDto {
    Date: Date;
    classId: string;
    absentStudents: ObjectId[];
    presentStudents: ObjectId[];
}
