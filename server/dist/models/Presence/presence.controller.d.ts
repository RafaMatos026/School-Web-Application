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
import { PresenceService } from "./presence.service";
import { newSurveyDto } from "./dto's/newSurvey.dto";
import { ObjectId } from "mongoose";
export declare class PresenceController {
    private readonly PresenceService;
    constructor(PresenceService: PresenceService);
    createPresence(newSurveyDto: newSurveyDto): Promise<import("./presence.schema").Presence>;
    getAbsents(_id: string): Promise<import("mongoose").Document<unknown, any, import("./presence.schema").Presence> & import("./presence.schema").Presence & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSurveys(classId: string): Promise<(import("mongoose").Document<unknown, any, import("./presence.schema").Presence> & import("./presence.schema").Presence & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    markPresence(studentId: ObjectId, _id: string, Present: boolean): Promise<boolean>;
    closeSurvey(_id: string): Promise<void>;
    lastestSurvey(classId: string): Promise<import("./presence.schema").Presence>;
    markPresenceJustified(_id: ObjectId, studentId: ObjectId): Promise<void>;
}
