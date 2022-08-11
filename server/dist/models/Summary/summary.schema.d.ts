import mongoose, { ObjectId } from 'mongoose';
export declare class Summary {
    Date: Date;
    Description: string;
    classId: ObjectId;
}
export declare const SummarySchema: mongoose.Schema<Summary, mongoose.Model<Summary, any, any, any, any>, {}, {}, {}, {}, "type", Summary>;
