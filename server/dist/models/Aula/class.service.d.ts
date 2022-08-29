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
import { Class } from "./class.schema";
import { CreateClassDto } from "./dto/createClass.dto";
import { UpdateClassDto } from "./dto/updateClass.dto";
import { UserService } from "../User/user.service";
export declare class ClassService {
    private readonly classModel;
    private readonly userService;
    constructor(classModel: Model<Class>, userService: UserService);
    createClass(CreateClassDto: CreateClassDto): Promise<Class>;
    getActiveClasses(): Promise<Class[]>;
    getDisabledClasses(): Promise<Class[]>;
    getClass(_id: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        ClassName: string;
        Subject: import("mongoose").Schema.Types.ObjectId;
        HeadTeacher: import("mongoose").Schema.Types.ObjectId;
        Status: boolean;
    }>;
    updateClass(_id: string, UpdateClassDto: UpdateClassDto): Promise<void>;
    disableClass(_id: string): Promise<void>;
    assignTeachers(_id: ObjectId, teachers: ObjectId[]): Promise<void>;
    assignStudents(_id: ObjectId, students: ObjectId[]): Promise<void>;
    assignedStudents(_id: string): Promise<import("mongoose").Schema.Types.ObjectId[]>;
    assignedTeachers(_id: string): Promise<import("mongoose").Schema.Types.ObjectId[]>;
    unassignStudent(_id: ObjectId, students: ObjectId[]): Promise<void>;
    unassignTeacher(_id: ObjectId, teachers: ObjectId[]): Promise<void>;
}
