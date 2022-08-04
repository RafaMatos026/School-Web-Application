import mongoose from 'mongoose';
import { Class } from '../Aula/class.schema';
export declare class Summary {
    Date: Date;
    Description: string;
    classId: Class;
}
export declare const SummarySchema: mongoose.Schema<Summary, mongoose.Model<Summary, any, any, any, any>, {}, {}, {}, {}, "type", Summary>;
