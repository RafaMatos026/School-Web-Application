"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const type_controller_1 = require("./type.controller");
const type_schema_1 = require("./type.schema");
const type_service_1 = require("./type.service");
let TypeModule = class TypeModule {
};
TypeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: type_schema_1.Type.name, schema: type_schema_1.TypeSchema }]),
        ],
        controllers: [type_controller_1.TypeController],
        providers: [type_service_1.TypeService],
    })
], TypeModule);
exports.TypeModule = TypeModule;
//# sourceMappingURL=type.module.js.map