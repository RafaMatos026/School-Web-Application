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
    async createUser(FName, LName, Email, Password, AccountType, Birthday) {
        return await this.UserService.createUser(FName, LName, Email, Password, Birthday, AccountType);
    }
    async getUser(_id) {
        return await this.UserService.getUser(_id);
    }
    async getUsers() {
        return await this.UserService.getUsers();
    }
    async updateUser(_id, FName, LName, Password) {
        await this.UserService.updateUser(_id, FName, LName, Password);
    }
    async deleteUser(_id) {
        await this.UserService.deleteUser(_id);
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
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('getUser/:id'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('getUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Put)('updateUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('FName')),
    __param(2, (0, common_1.Body)('LName')),
    __param(3, (0, common_1.Body)('Password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Put)('deleteUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map