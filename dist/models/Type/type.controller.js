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
exports.TypeController = void 0;
const common_1 = require("@nestjs/common");
const type_service_1 = require("./type.service");
let TypeController = class TypeController {
    constructor(TypeService) {
        this.TypeService = TypeService;
    }
    createType(Description) {
        return this.TypeService.createType(Description);
    }
    getTypes() {
        return this.TypeService.getTypes();
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)('Description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "createType", null);
__decorate([
    (0, common_1.Get)('getTypes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "getTypes", null);
TypeController = __decorate([
    (0, common_1.Controller)('types'),
    __metadata("design:paramtypes", [type_service_1.TypeService])
], TypeController);
exports.TypeController = TypeController;
//# sourceMappingURL=type.controller.js.map