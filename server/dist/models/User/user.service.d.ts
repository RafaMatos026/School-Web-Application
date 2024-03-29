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
import { NotFoundException } from "@nestjs/common";
import { User } from "./user.schema";
import { Model, ObjectId } from "mongoose";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { CreateStudentDto } from "./dto/createStudent.dto";
import { CreateTeacherDto } from "./dto/createTeacher.dto";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(CreateUserDto: CreateUserDto): Promise<User>;
    createStudent(createStudentDto: CreateStudentDto): Promise<User>;
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<User>;
    getUser(_id: string): Promise<User>;
    getUsers(): Promise<User[]>;
    getTeachers(): Promise<User[]>;
    getStudents(): Promise<User[]>;
    getActiveStudents(): Promise<User[]>;
    getDisabledStudents(): Promise<User[]>;
    getDisabledTeachers(): Promise<User[]>;
    getRequests(): Promise<User[]>;
    updateUser(_id: string, updateUserDto: UpdateUserDto): Promise<User>;
    changePassword(_id: string, Password: string): Promise<void>;
    disableUser(_id: string): Promise<void>;
    acceptTeacher(_id: string): Promise<void>;
    declineTeacher(_id: string): Promise<void>;
    assignableStudents(_id: ObjectId): Promise<any[] | NotFoundException>;
    assignableTeachers(_id: ObjectId): Promise<any[] | NotFoundException>;
    findByEmail(email: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        FName: string;
        LName: string;
        AccountType: import("mongoose").Schema.Types.ObjectId;
        Status: boolean;
        Registered: boolean;
        Password: string;
    }>;
    getId(email: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        FName: string;
        LName: string;
        AccountType: import("mongoose").Schema.Types.ObjectId;
    }>;
    addToMyClasses(_id: ObjectId, classId: ObjectId): Promise<void>;
    removeFromMyClasses(_id: ObjectId, classId: ObjectId): Promise<void>;
    getMyClasses(_id: ObjectId): Promise<import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getProfilePic(_id: ObjectId): Promise<import("mongoose").Document<unknown, any, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    forgotPassword(Email: string): Promise<void>;
}
