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
const isPublic_decorator_1 = require("../../auth/decorators/isPublic.decorator");
const class_service_1 = require("./class.service");
const createClass_dto_1 = require("./dto/createClass.dto");
const updateClass_dto_1 = require("./dto/updateClass.dto");
let ClassController = class ClassController {
    constructor(ClassService) {
        this.ClassService = ClassService;
    }
    async createClass(createClassDto) {
        return await this.ClassService.createClass(createClassDto);
    }
    async getActiveClasses() {
        const classes = await this.ClassService.getActiveClasses();
        return classes;
    }
    async getDisabledClasses() {
        const classes = await this.ClassService.getDisabledClasses();
        return classes;
    }
    async getClass(classId) {
        const clas = await this.ClassService.getClass(classId);
        return clas;
    }
    async updateClass(_id, UpdateClassDto) {
        await this.ClassService.updateClass(_id, UpdateClassDto);
    }
    async deleteClass(classId) {
        await this.ClassService.disableClass(classId);
    }
    async assignTeachers(_id, teachers) {
        await this.ClassService.assignTeachers(_id, teachers);
    }
    async assignStudents(_id, students) {
        await this.ClassService.assignStudents(_id, students);
    }
    async assignedStudents(_id) {
        return await this.ClassService.assignedStudents(_id);
    }
    async assignedTeachers(_id) {
        return await this.ClassService.assignedTeachers(_id);
    }
};
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createClass_dto_1.CreateClassDto]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "createClass", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)("getActiveClasses"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getActiveClasses", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)("getDisabledClasses"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getDisabledClasses", null);
__decorate([
    (0, common_1.Get)("getClass/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getClass", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Put)("updateClass/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateClass_dto_1.UpdateClassDto]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "updateClass", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Put)("deleteClass/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "deleteClass", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Put)("assignTeachers/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "assignTeachers", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Put)("assignStudents/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "assignStudents", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)("assignedStudents/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "assignedStudents", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)("assignedTeachers/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "assignedTeachers", null);
ClassController = __decorate([
    (0, common_1.Controller)("classes"),
    __metadata("design:paramtypes", [class_service_1.ClassService])
], ClassController);
exports.ClassController = ClassController;
//# sourceMappingURL=class.controller.js.map