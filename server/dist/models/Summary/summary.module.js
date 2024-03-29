"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummaryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const summary_controller_1 = require("./summary.controller");
const summary_schema_1 = require("./summary.schema");
const summary_service_1 = require("./summary.service");
let SummaryModule = class SummaryModule {
};
SummaryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: summary_schema_1.Summary.name, schema: summary_schema_1.SummarySchema }]),
        ],
        controllers: [summary_controller_1.SummaryController],
        providers: [summary_service_1.SummaryService],
    })
], SummaryModule);
exports.SummaryModule = SummaryModule;
//# sourceMappingURL=summary.module.js.map