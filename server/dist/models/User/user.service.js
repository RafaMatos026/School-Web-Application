"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(CreateUserDto) {
        const newUser = new this.userModel({
            FName: CreateUserDto.FName,
            LName: CreateUserDto.LName,
            Email: CreateUserDto.Email,
            Password: CreateUserDto.Password,
            Birthday: CreateUserDto.Birthday,
            AccountType: CreateUserDto.AccountType,
        });
        const result = await newUser.save();
        return result;
    }
    async createStudent(createStudentDto) {
        const newUser = new this.userModel({
            FName: createStudentDto.FName,
            LName: createStudentDto.LName,
            Email: createStudentDto.Email,
            AccountType: '62f38d97cafa8d86f57141c5',
        });
        const result = await newUser.save();
        return result;
    }
    async createTeacher(createTeacherDto) {
        const newUser = new this.userModel({
            FName: createTeacherDto.FName,
            LName: createTeacherDto.LName,
            Email: createTeacherDto.Email,
            Password: createTeacherDto.Password,
            AccountType: '62f38d8ccafa8d86f57141c3',
        });
        const result = await newUser.save();
        return result;
    }
    async getUser(_id) {
        const user = this.userModel.find({ _id: _id });
        if (user) {
            return user;
        }
        else {
            throw new common_1.NotFoundException('User not found!');
        }
    }
    async getUsers() {
        const users = await this.userModel.find({});
        if (users) {
            return users;
        }
        else {
            throw new common_1.NotFoundException('No users found!');
        }
    }
    async getTeachers() {
        const teachers = await this.userModel.find({
            Status: true,
            Registered: true,
            AccountType: '62f38d8ccafa8d86f57141c3',
        });
        if (teachers) {
            return teachers;
        }
        else {
            throw new common_1.NotFoundException('There are no teachers!');
        }
    }
    async getStudents() {
        const students = await this.userModel.find({
            AccountType: '62f38d97cafa8d86f57141c5',
        });
        if (students) {
            return students;
        }
        else {
            throw new common_1.NotFoundException('There are no students!');
        }
    }
    async getActiveStudents() {
        const result = await this.userModel.find({
            Status: true,
            AccountType: '62f38d97cafa8d86f57141c5',
        });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException('No students found!');
        }
    }
    async getDisabledStudents() {
        const result = await this.userModel.find({
            Status: false,
            Registered: true,
            AccountType: '62f38d97cafa8d86f57141c5',
        });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException('No students found!');
        }
    }
    async getDisabledTeachers() {
        const result = await this.userModel.find({
            Status: false,
            Registered: true,
            AccountType: '62f38d8ccafa8d86f57141c3',
        });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException('No teachers found!');
        }
    }
    async getRequests() {
        const requests = await this.userModel.find({
            Status: false,
            Registered: false,
            AccountType: '62f38d8ccafa8d86f57141c3',
        });
        if (requests) {
            return requests;
        }
        else {
            throw new common_1.NotFoundException('No requests yet!');
        }
    }
    async updateUser(_id, updateUserDto) {
        const user = await this.userModel.findByIdAndUpdate({ _id: _id }, {
            FName: updateUserDto.FName,
            LName: updateUserDto.LName,
            Password: updateUserDto.Password,
        });
        return user;
    }
    async disableUser(_id) {
        await this.userModel.findByIdAndUpdate({
            _id: _id,
        }, {
            Status: false,
        });
        return;
    }
    async acceptTeacher(_id) {
        await this.userModel.findByIdAndUpdate({
            _id: _id,
        }, {
            Status: true,
            Registered: true,
        });
    }
    async declineTeacher(_id) {
        await this.userModel.deleteOne({ _id: _id });
        return;
    }
    async assignableStudents(_id) {
        const students = await this.userModel.find({
            AccountType: '62f38d97cafa8d86f57141c5',
        });
        const astudents = [];
        if (students) {
            for (const student of students) {
                const classes = student.MyClasses;
                if (!(classes === null || classes === void 0 ? void 0 : classes.includes(_id))) {
                    astudents.push(student);
                }
            }
            if (astudents) {
                return astudents;
            }
            else {
                throw new common_1.NotFoundException('No student is assignable to this class!');
            }
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map