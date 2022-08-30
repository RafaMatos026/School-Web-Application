"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const class_module_1 = require("./models/Aula/class.module");
const presence_module_1 = require("./models/Presence/presence.module");
const subject_module_1 = require("./models/Subject/subject.module");
const summary_module_1 = require("./models/Summary/summary.module");
const type_module_1 = require("./models/Type/type.module");
const user_module_1 = require("./models/User/user.module");
const work_module_1 = require("./models/Work/work.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_guard_1 = require("./auth/guards/jwt.guard");
const config_1 = require("@nestjs/config");
const evaluation_module_1 = require("./models/Evaluation/evaluation.module");
const absence_justification_module_1 = require("./models/absence-justification/absence-justification.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            subject_module_1.SubjectModule,
            type_module_1.TypeModule,
            user_module_1.UserModule,
            class_module_1.ClassModule,
            summary_module_1.SummaryModule,
            presence_module_1.PresenceModule,
            work_module_1.WorkModule,
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGOOSE_CONNECTION),
            auth_module_1.AuthModule,
            evaluation_module_1.EvaluationModule,
            absence_justification_module_1.AbsenceJustificationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, { provide: core_1.APP_GUARD, useClass: jwt_guard_1.JwtAuthGuard }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map