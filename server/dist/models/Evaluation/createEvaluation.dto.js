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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvaluationDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEvaluationDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Evaluation must have a name!" }),
    (0, class_validator_1.Length)(6, 20, {
        message: "Evaluation name must be between 6 to 20 characters!",
    }),
    __metadata("design:type", String)
], CreateEvaluationDto.prototype, "EvaluationName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Evaluation must be submitted by a teacher!" }),
    __metadata("design:type", Object)
], CreateEvaluationDto.prototype, "teacherId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Evaluation must be associated to a class!" }),
    __metadata("design:type", Object)
], CreateEvaluationDto.prototype, "classId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Evaluation must have a url associated with!" }),
    __metadata("design:type", String)
], CreateEvaluationDto.prototype, "fileUrl", void 0);
exports.CreateEvaluationDto = CreateEvaluationDto;
//# sourceMappingURL=createEvaluation.dto.js.map