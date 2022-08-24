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
import { Model } from 'mongoose';
import { Subject } from './subject.schema';
export declare class SubjectService {
    private readonly subjectModel;
    constructor(subjectModel: Model<Subject>);
    createSubject(Description: string): Promise<Subject>;
    getSubjects(): Promise<(import("mongoose").Document<unknown, any, Subject> & Subject & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSubject(_id: string): Promise<import("mongoose").Document<unknown, any, Subject> & Subject & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteSubject(_id: string): Promise<void>;
}
