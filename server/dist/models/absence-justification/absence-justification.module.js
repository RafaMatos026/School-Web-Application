"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsenceJustificationModule = void 0;
const common_1 = require("@nestjs/common");
const absence_justification_controller_1 = require("./absence-justification.controller");
const absence_justification_service_1 = require("./absence-justification.service");
let AbsenceJustificationModule = class AbsenceJustificationModule {
};
AbsenceJustificationModule = __decorate([
    (0, common_1.Module)({
        controllers: [absence_justification_controller_1.AbsenceJustificationController],
        providers: [absence_justification_service_1.AbsenceJustificationService]
    })
], AbsenceJustificationModule);
exports.AbsenceJustificationModule = AbsenceJustificationModule;
//# sourceMappingURL=absence-justification.module.js.map