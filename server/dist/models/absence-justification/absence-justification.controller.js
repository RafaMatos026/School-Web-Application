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
exports.AbsenceJustificationController = void 0;
const common_1 = require("@nestjs/common");
const createAbsenceJustification_dto_1 = require("./createAbsenceJustification.dto");
const absence_justification_service_1 = require("./absence-justification.service");
let AbsenceJustificationController = class AbsenceJustificationController {
    constructor(AbsenceJustificationService) {
        this.AbsenceJustificationService = AbsenceJustificationService;
    }
    async createAbsenceJustification(data) {
        return await this.AbsenceJustificationService.addAbsenceJustification(data);
    }
    async getAbsenceJustificationsByClass(classId) {
        return await this.AbsenceJustificationService.getJustificationsByClass(classId);
    }
};
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createAbsenceJustification_dto_1.CreateAbsenceJustificationDto]),
    __metadata("design:returntype", Promise)
], AbsenceJustificationController.prototype, "createAbsenceJustification", null);
__decorate([
    (0, common_1.Get)("getAbsenceJustifications/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AbsenceJustificationController.prototype, "getAbsenceJustificationsByClass", null);
AbsenceJustificationController = __decorate([
    (0, common_1.Controller)("absence-justification"),
    __metadata("design:paramtypes", [absence_justification_service_1.AbsenceJustificationService])
], AbsenceJustificationController);
exports.AbsenceJustificationController = AbsenceJustificationController;
//# sourceMappingURL=absence-justification.controller.js.map