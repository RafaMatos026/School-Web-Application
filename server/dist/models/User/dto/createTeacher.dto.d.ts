import { ObjectId } from "mongoose";
export declare class CreateTeacherDto {
    FName: string;
    LName: string;
    Email: string;
    Birthday: Date;
    Password: string;
    MyClasses: ObjectId[];
}
