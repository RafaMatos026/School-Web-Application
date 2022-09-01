/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, ObjectId } from "mongoose";
import { Presence } from "./presence.schema";
import { newSurveyDto } from "./dto's/newSurvey.dto";
export declare class PresenceService {
    private readonly presenceModel;
    constructor(presenceModel: Model<Presence>);
    newSurvey(newSurveyDto: newSurveyDto): Promise<Presence>;
    markPresence(_id: string, studenId: ObjectId, Present: boolean): Promise<boolean>;
    closeSurvey(_id: string): Promise<void>;
    getSurveys(classId: string): Promise<(import("mongoose").Document<unknown, any, Presence> & Presence & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getPresences(_id: string): Promise<import("mongoose").Document<unknown, any, Presence> & Presence & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getLatestSurvey(classId: string): Promise<Presence>;
    markAbsenceJustified(_id: ObjectId, studenId: ObjectId): Promise<void>;
}
