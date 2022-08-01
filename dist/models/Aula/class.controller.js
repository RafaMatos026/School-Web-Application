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
exports.ClassController = void 0;
const common_1 = require("@nestjs/common");
const subject_schema_1 = require("../Subject/subject.schema");
const user_schema_1 = require("../User/user.schema");
const class_service_1 = require("./class.service");
let ClassController = class ClassController {
    constructor(ClassService) {
        this.ClassService = ClassService;
    }
    async createClass(ClassName, Subject, HeadTeacher, AssignedTeachers, Status) {
        return await this.ClassService.createClass(ClassName, Subject, HeadTeacher, AssignedTeachers, Status);
    }
    async getClasses() {
        const classes = await this.ClassService.getClasses();
        return classes;
    }
    async getClass(classId) {
        const clas = await this.ClassService.getClass(classId);
        return clas;
    }
    async updateClass(classId) {
        const clas = await this.updateClass(classId);
        return clas;
    }
    async deleteClass(classId) {
        await this.ClassService.deleteClass(classId);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('ClassName')),
    __param(1, (0, common_1.Body)('Subject')),
    __param(2, (0, common_1.Body)('HeadTeacher')),
    __param(3, (0, common_1.Body)('AssignedTeachers')),
    __param(4, (0, common_1.Body)('Status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, subject_schema_1.Subject,
        user_schema_1.User, Array, Boolean]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "createClass", null);
__decorate([
    (0, common_1.Get)('getClasses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getClasses", null);
__decorate([
    (0, common_1.Get)('getClass/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getClass", null);
__decorate([
    (0, common_1.Put)('updateClass/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "updateClass", null);
__decorate([
    (0, common_1.Put)('deleteClass/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "deleteClass", null);
ClassController = __decorate([
    (0, common_1.Controller)('classes'),
    __metadata("design:paramtypes", [class_service_1.ClassService])
], ClassController);
exports.ClassController = ClassController;
//# sourceMappingURL=class.controller.js.map