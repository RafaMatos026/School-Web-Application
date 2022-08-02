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
const class_service_1 = require("./class.service");
const createClass_dto_1 = require("./dto/createClass.dto");
let ClassController = class ClassController {
    constructor(ClassService) {
        this.ClassService = ClassService;
    }
    async createClass(createClassDto) {
        return await this.ClassService.createClass(createClassDto);
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
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createClass_dto_1.CreateClassDto]),
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