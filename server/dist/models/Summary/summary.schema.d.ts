import mongoose, { ObjectId } from "mongoose";
export declare class Summary {
    SummaryName: string;
    Date: Date;
    classId: ObjectId;
    Description: string;
}
export declare const SummarySchema: mongoose.Schema<Summary, mongoose.Model<Summary, any, any, any, any>, {}, {}, {}, {}, "type", Summary>;
