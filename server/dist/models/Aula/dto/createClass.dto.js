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
exports.CreateClassDto = void 0;
const class_validator_1 = require("class-validator");
class CreateClassDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Class must have a name!' }),
    (0, class_validator_1.Length)(6, 20, { message: 'Class name must be between 6 to 20 characters!' }),
    __metadata("design:type", String)
], CreateClassDto.prototype, "ClassName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Class must have a subject!' }),
    __metadata("design:type", Object)
], CreateClassDto.prototype, "Subject", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Class must have a headteacher!' }),
    __metadata("design:type", Object)
], CreateClassDto.prototype, "HeadTeacher", void 0);
exports.CreateClassDto = CreateClassDto;
//# sourceMappingURL=createClass.dto.js.map