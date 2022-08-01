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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(FName, LName, Email, Password, Birthday, AccountType) {
        const newUser = new this.userModel({
            FName: FName,
            LName: LName,
            Email: Email,
            Password: Password,
            Birthday: Birthday,
            AccountType: AccountType,
        });
        const result = await newUser.save();
        return result;
    }
    async getUser(_id) {
        const user = this.userModel.findById(_id);
        if (user) {
            return user;
        }
        else {
            throw new common_1.NotFoundException('User not found!');
        }
    }
    async getUsers() {
        const users = await this.userModel.find({});
        if (users) {
            return users;
        }
        else {
            throw new common_1.NotFoundException('No users found!');
        }
    }
    async updateUser(_id, FName, LName, Password) {
        const user = await this.userModel.findByIdAndUpdate({ _id: _id }, {
            FName: FName,
            LName: LName,
            Password: Password,
        });
    }
    async deleteUser(_id) {
        await this.userModel.findByIdAndUpdate({
            _id: _id,
        }, {
            Status: false,
        });
        return;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map