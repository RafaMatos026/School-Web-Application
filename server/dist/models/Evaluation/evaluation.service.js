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
exports.EvaluationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const evaluation_schema_1 = require("./evaluation.schema");
const mongoose_2 = require("@nestjs/mongoose");
let EvaluationService = class EvaluationService {
    constructor(evaluationModel) {
        this.evaluationModel = evaluationModel;
    }
    async createEvaluation(data) {
        const newEvaluation = new this.evaluationModel({
            EvaluationName: data.EvaluationName,
            DateAdded: data.DateAdded,
            classId: data.classId,
            teacherId: data.teacherId,
            fileUrl: data.fileUrl,
        });
        const result = await newEvaluation.save();
        return result;
    }
    async getEvaluationsByClass(classId) {
        const evaluations = await this.evaluationModel.find({ classId: classId });
        if (evaluations) {
            return evaluations;
        }
        else {
            return new common_1.NotFoundException("No evaluations were added to this class yet!");
        }
    }
};
EvaluationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(evaluation_schema_1.Evaluation.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], EvaluationService);
exports.EvaluationService = EvaluationService;
//# sourceMappingURL=evaluation.service.js.map