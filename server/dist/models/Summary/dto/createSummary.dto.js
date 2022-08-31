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
exports.CreateSummaryDto = void 0;
const class_validator_1 = require("class-validator");
class CreateSummaryDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Summary must have a name!" }),
    (0, class_validator_1.Length)(5, 15, {
        message: "Name must be between 5 and 15 characters!",
    }),
    __metadata("design:type", String)
], CreateSummaryDto.prototype, "SummaryName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Summary must have a date of creatiion!" }),
    __metadata("design:type", Date)
], CreateSummaryDto.prototype, "Date", void 0);
__decorate([
    (0, class_validator_1.Length)(5, 50, {
        message: "Summary description must have between 10 to 50 characters!",
    }),
    __metadata("design:type", String)
], CreateSummaryDto.prototype, "Description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Summary must belong to a class!" }),
    __metadata("design:type", Object)
], CreateSummaryDto.prototype, "classId", void 0);
exports.CreateSummaryDto = CreateSummaryDto;
//# sourceMappingURL=createSummary.dto.js.map