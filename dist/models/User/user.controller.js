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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const type_schema_1 = require("../Type/type.schema");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    createUser(FName, LName, Email, Password, AccountType, Birthday) {
        return this.UserService.createUser(FName, LName, Email, Password, Birthday, AccountType);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('FName')),
    __param(1, (0, common_1.Body)('LName')),
    __param(2, (0, common_1.Body)('Email')),
    __param(3, (0, common_1.Body)('Password')),
    __param(4, (0, common_1.Body)('AccountType')),
    __param(5, (0, common_1.Body)('Birthday')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, type_schema_1.Type,
        Date]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map