"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationModule = void 0;
const common_1 = require("@nestjs/common");
const evaluation_service_1 = require("./evaluation.service");
const evaluation_controller_1 = require("./evaluation.controller");
const evaluation_schema_1 = require("./evaluation.schema");
const mongoose_1 = require("@nestjs/mongoose");
let EvaluationModule = class EvaluationModule {
};
EvaluationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: evaluation_schema_1.Evaluation.name, schema: evaluation_schema_1.EvaluationSchema },
            ]),
        ],
        providers: [evaluation_service_1.EvaluationService],
        controllers: [evaluation_controller_1.EvaluationController],
    })
], EvaluationModule);
exports.EvaluationModule = EvaluationModule;
//# sourceMappingURL=evaluation.module.js.map