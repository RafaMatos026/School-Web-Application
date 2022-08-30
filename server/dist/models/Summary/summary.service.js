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
exports.SummaryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const summary_schema_1 = require("./summary.schema");
let SummaryService = class SummaryService {
    constructor(summaryModel) {
        this.summaryModel = summaryModel;
    }
    async createSummary(CreateSummaryDto) {
        const newSummary = new this.summaryModel({
            Date: CreateSummaryDto.Date,
            Description: CreateSummaryDto.Description,
            classId: CreateSummaryDto.classId,
        });
        await newSummary.save();
        return newSummary;
    }
    async getSummarys() {
        const summarys = await this.summaryModel.find({});
        if (summarys) {
            return summarys;
        }
        else {
            throw new common_1.NotFoundException("No summarys found!");
        }
    }
    async getSummariesByClass(classId) {
        const summaries = await this.summaryModel
            .find({ classId: classId })
            .select("Date Description");
        if (summaries) {
            return summaries;
        }
        else {
            throw new common_1.NotFoundException("No summaries found for this class!");
        }
    }
    async getSummary(_id) {
        const summary = await this.summaryModel.findById(_id);
        if (summary) {
            return summary;
        }
        else {
            throw new common_1.NotFoundException("Summary not found!");
        }
    }
};
SummaryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(summary_schema_1.Summary.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SummaryService);
exports.SummaryService = SummaryService;
//# sourceMappingURL=summary.service.js.map