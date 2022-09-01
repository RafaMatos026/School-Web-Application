import { ObjectId } from "mongoose";
import { Class } from "../Aula/class.schema";
export declare class CreateWorkDto {
    WorkName: string;
    classId: Class;
    userId: ObjectId;
    fileUrl: string;
    Description: string;
    DueDate: Date;
    AddedDate: Date;
}
