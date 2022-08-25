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
exports.CreateWorkDto = void 0;
const class_validator_1 = require("class-validator");
const class_schema_1 = require("../Aula/class.schema");
class CreateWorkDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Class must have a name!' }),
    (0, class_validator_1.Length)(6, 20, { message: 'Class name must be between 6 to 20 characters!' }),
    __metadata("design:type", String)
], CreateWorkDto.prototype, "WorkName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Work needs to have a due date!' }),
    __metadata("design:type", Date)
], CreateWorkDto.prototype, "DueDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Work must be associated to a class!' }),
    __metadata("design:type", class_schema_1.Class)
], CreateWorkDto.prototype, "classId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Work must hava a url associated with!" }),
    __metadata("design:type", String)
], CreateWorkDto.prototype, "fileUrl", void 0);
exports.CreateWorkDto = CreateWorkDto;
//# sourceMappingURL=createWork.dto.js.map