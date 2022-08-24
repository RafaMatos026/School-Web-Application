import { User } from './user.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateStudentDto } from './dto/createStudent.dto';
import { CreateTeacherDto } from './dto/createTeacher.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(CreateUserDto: CreateUserDto): Promise<User>;
    createStudent(createStudentDto: CreateStudentDto): Promise<User>;
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<User>;
    getUser(_id: string): Promise<User[]>;
    getUsers(): Promise<User[]>;
    getTeachers(): Promise<User[]>;
    getStudents(): Promise<User[]>;
    getActiveStudents(): Promise<User[]>;
    getDisabledStudents(): Promise<User[]>;
    getDisabledTeachers(): Promise<User[]>;
    getRequests(): Promise<User[]>;
    updateUser(_id: string, updateUserDto: UpdateUserDto): Promise<User>;
    disableUser(_id: string): Promise<void>;
    acceptTeacher(_id: string): Promise<void>;
    declineTeacher(_id: string): Promise<void>;
    assignableStudents(_id: ObjectId): Promise<any[]>;
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
}
