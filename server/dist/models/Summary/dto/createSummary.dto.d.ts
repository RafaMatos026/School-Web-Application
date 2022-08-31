import { ObjectId } from "mongoose";
export declare class CreateSummaryDto {
    SummaryName: string;
    Date: Date;
    Description: string;
    classId: ObjectId;
}
