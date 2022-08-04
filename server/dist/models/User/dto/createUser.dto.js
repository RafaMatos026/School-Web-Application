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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const subject_schema_1 = require("../../Subject/subject.schema");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'First name cannot be empty!' }),
    (0, class_validator_1.Length)(5, 10, { message: 'Name must be between 5 and 10 characters|' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "FName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'First name cannot be empty!' }),
    (0, class_validator_1.Length)(5, 10, { message: 'Name must be between 5 and 10 characters|' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "LName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email must not be empty' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Must be a valid date!' }),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "Birthday", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'User must have an account type!' }),
    __metadata("design:type", subject_schema_1.Subject)
], CreateUserDto.prototype, "AccountType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password cannot be empty!' }),
    (0, class_validator_1.Length)(8, 16, { message: 'Password must have between 8 to 16 characters!' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "Password", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=createUser.dto.js.map