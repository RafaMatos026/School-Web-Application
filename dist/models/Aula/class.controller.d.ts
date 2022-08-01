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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
import { ClassService } from './class.service';
export declare class ClassController {
    private readonly ClassService;
    constructor(ClassService: ClassService);
    createClass(ClassName: string, Subject: Subject, HeadTeacher: User, AssignedTeachers: User[], Status: boolean): Promise<import("mongoose").Document<unknown, any, import("./class.schema").Class> & import("./class.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(): Promise<void>;
    getClass(classId: string): Promise<(import("mongoose").Document<unknown, any, import("./class.schema").Class> & import("./class.schema").Class & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
