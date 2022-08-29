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
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { CreateStudentDto } from "./dto/createStudent.dto";
import { CreateTeacherDto } from "./dto/createTeacher.dto";
import { ObjectId } from "mongoose";
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    createUser(CreateUserDto: CreateUserDto): Promise<import("./user.schema").User>;
    createStudent(CreateStudentDto: CreateStudentDto): Promise<import("./user.schema").User>;
    createTeacher(CreateTeacherDto: CreateTeacherDto): Promise<import("./user.schema").User>;
    getUser(_id: string): Promise<import("./user.schema").User[]>;
    getUsers(): Promise<import("./user.schema").User[]>;
    getTeachers(): Promise<import("./user.schema").User[]>;
    getStudents(): Promise<import("./user.schema").User[]>;
    getDisabledStudents(): Promise<import("./user.schema").User[]>;
    getDisabledTeachers(): Promise<import("./user.schema").User[]>;
    getActiveStudents(): Promise<import("./user.schema").User[]>;
    getRequests(): Promise<import("./user.schema").User[]>;
    updateUser(_id: string, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUser(_id: string): Promise<void>;
    acceptTeacher(_id: string): Promise<void>;
    declineTeacher(_id: string): Promise<void>;
    assignableStudents(_id: ObjectId): Promise<any[] | import("@nestjs/common").NotFoundException>;
    assignableTeachers(_id: ObjectId): Promise<any[] | import("@nestjs/common").NotFoundException>;
    getByEmail(email: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        FName: string;
        LName: string;
        AccountType: import("mongoose").Schema.Types.ObjectId;
        Status: boolean;
        Registered: boolean;
        Password: string;
    }>;
    getMyClasses(_id: ObjectId): Promise<import("mongoose").Document<unknown, any, import("./user.schema").User> & import("./user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
