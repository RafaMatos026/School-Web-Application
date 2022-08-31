import { ObjectId } from "mongoose";
import { Class } from "../Aula/class.schema";
export declare class CreateWorkDto {
    WorkName: string;
    Description: string;
    DueDate: Date;
    classId: Class;
    userId: ObjectId;
    AddedDate: Date;
    fileUrl: string;
}
