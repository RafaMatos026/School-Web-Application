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
exports.PresenceController = void 0;
const common_1 = require("@nestjs/common");
const presence_service_1 = require("./presence.service");
const newSurvey_dto_1 = require("./dto's/newSurvey.dto");
const isPublic_decorator_1 = require("../../auth/decorators/isPublic.decorator");
let PresenceController = class PresenceController {
    constructor(PresenceService) {
        this.PresenceService = PresenceService;
    }
    async createPresence(newSurveyDto) {
        const survey = await this.PresenceService.newSurvey(newSurveyDto);
        return survey;
    }
    async getAbsents(_id) {
        const absents = await this.PresenceService.getAbsents(_id);
        return absents;
    }
    async getPresents(_id) {
        const presents = await this.PresenceService.getPresents(_id);
        return presents;
    }
    async getSurveys(classId) {
        const surveys = await this.PresenceService.getSurveys(classId);
        return surveys;
    }
    async markPresence(studentId, _id, Present) {
        const success = await this.PresenceService.markPresence(_id, studentId, Present);
        return success;
    }
    async closeSurvey(_id) {
        await this.PresenceService.closeSurvey(_id);
    }
    async lastestSurvey(classId) {
        const survey = await this.PresenceService.getLatestSurvey(classId);
        return survey;
    }
};
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newSurvey_dto_1.newSurveyDto]),
    __metadata("design:returntype", Promise)
], PresenceController.prototype, "createPresence", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getAbsents/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresenceController.prototype, "getAbsents", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getPresents/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresenceController.prototype, "getPresents", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('getSurveys/:classId'),
    __param(0, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresenceController.prototype, "getSurveys", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Put)('markPresence/'),
    __param(0, (0, common_1.Body)('studentId')),
    __param(1, (0, common_1.Body)('_id')),
    __param(2, (0, common_1.Body)('Present')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Boolean]),
    __metadata("design:returntype", Promise)
], PresenceController.prototype, "markPresence", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Put)('closeSurvey/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresenceController.prototype, "closeSurvey", null);
__decorate([
    (0, isPublic_decorator_1.Public)(),
    (0, common_1.Get)('latestSurvey/:classId'),
    __param(0, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PresenceController.prototype, "lastestSurvey", null);
PresenceController = __decorate([
    (0, common_1.Controller)('presences'),
    __metadata("design:paramtypes", [presence_service_1.PresenceService])
], PresenceController);
exports.PresenceController = PresenceController;
//# sourceMappingURL=presence.controller.js.map