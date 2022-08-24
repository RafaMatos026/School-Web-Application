import { ObjectId } from 'mongoose';
export declare class CreateClassDto {
    ClassName: string;
    Subject: ObjectId;
    HeadTeacher: ObjectId;
    AssignedTeachers: ObjectId[];
    AssignedStudents: ObjectId[];
}
