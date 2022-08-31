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
import { AbsenceJustification } from "./absence-justification.schema";
import { CreateAbsenceJustificationDto } from "./createAbsenceJustification.dto";
export declare class AbsenceJustificationService {
    private readonly absencejustificationModel;
    constructor(absencejustificationModel: Model<AbsenceJustification>);
    addAbsenceJustification(data: CreateAbsenceJustificationDto): Promise<import("mongoose").Document<unknown, any, AbsenceJustification> & AbsenceJustification & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getJustificationsByClass(classId: ObjectId): Promise<(import("mongoose").Document<unknown, any, AbsenceJustification> & AbsenceJustification & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
