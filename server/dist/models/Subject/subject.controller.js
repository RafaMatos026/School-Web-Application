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
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const subject_service_1 = require("./subject.service");
let SubjectController = class SubjectController {
    constructor(SubjectService) {
        this.SubjectService = SubjectService;
    }
    async createSubject(Description) {
        const subject = await this.SubjectService.createSubject(Description);
        return subject;
    }
    async getSubjects() {
        const subjects = await this.SubjectService.getSubjects();
        return subjects;
    }
    async getSubject(subjectId) {
        const subject = await this.SubjectService.getSubject(subjectId);
        return subject;
    }
    async deleteSubject(subjectId) {
        const subject = await this.SubjectService.deleteSubject(subjectId);
        return subject;
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('Description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "createSubject", null);
__decorate([
    (0, common_1.Get)('getSubjects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getSubjects", null);
__decorate([
    (0, common_1.Get)('getSubject/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "getSubject", null);
__decorate([
    (0, common_1.Put)('deleteSubject/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "deleteSubject", null);
SubjectController = __decorate([
    (0, common_1.Controller)('subjects'),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
exports.SubjectController = SubjectController;
//# sourceMappingURL=subject.controller.js.map