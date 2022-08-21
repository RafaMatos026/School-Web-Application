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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const createUser_dto_1 = require("./dto/createUser.dto");
const updateUser_dto_1 = require("./dto/updateUser.dto");
const createStudent_dto_1 = require("./dto/createStudent.dto");
const createTeacher_dto_1 = require("./dto/createTeacher.dto");
const isPublic_decorator_1 = require("../../auth/decorators/isPublic.decorator");
let UserController = class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    async createUser(CreateUserDto) {
        const existingUser = this.UserService.findByEmail(CreateUserDto.Email);
        if (existingUser) {
            return { success: false, message: 'Email already taken!' };
        }
        return await this.UserService.createUser(CreateUserDto);
    }
    async createStudent(CreateStudentDto) {
        return await this.UserService.createStudent(CreateStudentDto);
    }
    async createTeacher(CreateTeacherDto) {
        return await this.UserService.createTeacher(CreateTeacherDto);
    }
    async getUser(_id) {
        return await this.UserService.getUser(_id);
    }
    async getUsers() {
        return await this.UserService.getUsers();
    }
    async getTeachers() {
        return await this.UserService.getTeachers();
    }
    async getStudents() {
        return await this.UserService.getStudents();
    }
    async getDisabledStudents() {
        const students = await this.UserService.getDisabledStudents();
        return students;
    }
    async getDisabledTeachers() {
        const teachers = await this.UserService.getDisabledTeachers();
        return teachers;
    }
    async getActiveStudents() {
        const students = await this.UserService.getActiveStudents();
        return students;
    }
    async getRequests() {
        return await this.UserService.getRequests();
    }
    async updateUser(_id, updateUserDto) {
        await this.UserService.updateUser(_id, updateUserDto);
    }
    async deleteUser(_id) {
        await this.UserService.disableUser(_id);
    }
    async acceptTeacher(_id) {
        await this.UserService.acceptTeacher(_id);
    }
    async declineTeacher(_id) {
        await this.UserService.declineTeacher(_id);
    }
    async assignableStudents(_id) {
        return await this.UserService.assignableStudents(_id);
    }
    async getByEmail(email) {
        return await this.UserService.findByEmail(email);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/createStudent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStudent_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Post)('/createTeacher'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTeacher_dto_1.CreateTeacherDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createTeacher", null);
__decorate([
    (0, common_1.Get)('/getUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getTeachers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getTeachers", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getStudents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getStudents", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getDisabledStudents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getDisabledStudents", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getDisabledTeachers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getDisabledTeachers", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getActiveStudents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getActiveStudents", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('/registrationRequests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getRequests", null);
__decorate([
    (0, common_1.Put)('updateUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateUser_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Put)('disableUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Put)('acceptTeacher/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "acceptTeacher", null);
__decorate([
    (0, common_1.Put)('declineTeacher/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "declineTeacher", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('assignableStudents/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "assignableStudents", null);
__decorate([
    (0, common_1.Get)('getByEmail'),
    __param(0, (0, common_1.Body)('Email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getByEmail", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map