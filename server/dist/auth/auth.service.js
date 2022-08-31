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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../models/User/user.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(Email) {
        const user = await this.userService.getId(Email);
        console.log();
        if (user) {
            const payload = {
                _id: user._id.toString(),
                FName: user.FName,
                LName: user.LName,
                AccountType: user.AccountType,
            };
            return {
                user: {
                    _id: user._id.toString(),
                    FName: user.FName,
                    LName: user.LName,
                    AccountType: user.AccountType,
                },
                access_token: this.jwtService.sign(payload),
            };
        }
    }
    async validateToken(token) {
        if (token) {
            const user = await this.jwtService.verify(token);
            if (user) {
                return user;
            }
        }
        else {
            return null;
        }
    }
    async validateUser(email, pass) {
        const user = await this.userService.findByEmail(email);
        if (user) {
            if (user.Registered && user.Status) {
                const isMatch = await bcrypt.compare(pass, user.Password);
                if (isMatch) {
                    return user;
                }
            }
            else {
                throw new common_1.UnauthorizedException("Account disabled or your registration request hasn't been accepted yet!");
            }
        }
        throw new common_1.UnauthorizedException("Email address or password incorrect!");
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map