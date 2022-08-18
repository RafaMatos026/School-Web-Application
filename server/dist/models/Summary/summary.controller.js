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
exports.SummaryController = void 0;
const common_1 = require("@nestjs/common");
const is_public_decorator_1 = require("../../authentication/decorator/is-public.decorator");
const createSummary_dto_1 = require("./dto/createSummary.dto");
const summary_service_1 = require("./summary.service");
let SummaryController = class SummaryController {
    constructor(SummaryService) {
        this.SummaryService = SummaryService;
    }
    async createSummary(CreateSummaryDto) {
        const summary = await this.SummaryService.createSummary(CreateSummaryDto);
        return summary;
    }
    async getSummarys() {
        const summarys = await this.SummaryService.getSummarys();
        return summarys;
    }
    async getSummary(_id) {
        const summary = await this.SummaryService.getSummary(_id);
        return summary;
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSummary_dto_1.CreateSummaryDto]),
    __metadata("design:returntype", Promise)
], SummaryController.prototype, "createSummary", null);
__decorate([
    (0, common_1.Get)('getSummaries'),
    (0, is_public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SummaryController.prototype, "getSummarys", null);
__decorate([
    (0, common_1.Get)('getSummary/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SummaryController.prototype, "getSummary", null);
SummaryController = __decorate([
    (0, common_1.Controller)('summaries'),
    __metadata("design:paramtypes", [summary_service_1.SummaryService])
], SummaryController);
exports.SummaryController = SummaryController;
//# sourceMappingURL=summary.controller.js.map