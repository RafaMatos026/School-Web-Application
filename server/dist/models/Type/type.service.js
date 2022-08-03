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
exports.TypeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const type_schema_1 = require("./type.schema");
let TypeService = class TypeService {
    constructor(typeModel) {
        this.typeModel = typeModel;
    }
    async createType(Description) {
        const newType = new this.typeModel({
            Description: Description,
        });
        const result = await newType.save();
        return result;
    }
    async getTypes() {
        const types = await this.typeModel.find({});
        if (types) {
            return types;
        }
        else {
            throw new common_1.NotFoundException('No user types found!');
        }
    }
    async getType(_id) {
        const type = await this.typeModel.findById(_id);
        if (!type) {
            throw new common_1.NotFoundException('User account type not found!');
        }
        else {
            return type;
        }
    }
};
TypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(type_schema_1.Type.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map