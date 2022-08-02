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
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.Length)(6, 16, { message: 'First name must be between 6 and 16 characters!' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "FName", void 0);
__decorate([
    (0, class_validator_1.Length)(6, 16, { message: 'Last name must be between 6 and 16 characters!' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "LName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({ message: 'Not a valid email!' }),
    (0, class_validator_1.Length)(10, 40, {
        message: 'Email must be between 10 and 40 characters!',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "Email", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: 'Not a valid date!' }),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "Birthday", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'User must have an account type!' }),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "AccountType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password cannot be empty!' }),
    (0, class_validator_1.Length)(8, 16, { message: 'Password must be between 8 and 16 characters!' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "Password", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: 'User account status must be of type boolean!' }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "Status", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: 'Registered must be of boolean type!' }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "Registered", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=createUser.dto.js.map