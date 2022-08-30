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
exports.AbsenceJustificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const absence_justification_schema_1 = require("./absence-justification.schema");
let AbsenceJustificationService = class AbsenceJustificationService {
    constructor(absencejustificationModel) {
        this.absencejustificationModel = absencejustificationModel;
    }
    async addAbsenceJustification(DateAdded, classId, studentId) {
        const newAbsenceJustification = new this.absencejustificationModel({
            classId: classId,
            studentId: studentId,
            DateAdded: DateAdded,
        });
        const result = await newAbsenceJustification.save();
        return result;
    }
    async getJustificationsByClass(classId) {
        const justifications = await this.absencejustificationModel
            .find({
            classId: classId,
        })
            .exec();
        if (justifications) {
            return justifications;
        }
        else {
            throw new common_1.NotFoundException("No absence justifications for this class yet!");
        }
    }
};
AbsenceJustificationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(absence_justification_schema_1.AbsenceJustification.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AbsenceJustificationService);
exports.AbsenceJustificationService = AbsenceJustificationService;
//# sourceMappingURL=absence-justification.service.js.map