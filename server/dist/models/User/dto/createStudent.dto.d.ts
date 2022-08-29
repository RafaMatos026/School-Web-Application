import { ObjectId } from 'mongoose';
export declare class CreateStudentDto {
    FName: string;
    LName: string;
    Email: string;
    MyClasses: ObjectId[];
}
