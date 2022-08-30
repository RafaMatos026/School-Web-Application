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
exports.WorkService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const work_schema_1 = require("./work.schema");
let WorkService = class WorkService {
    constructor(workModel) {
        this.workModel = workModel;
    }
    async createWork(data) {
        const newWork = new this.workModel({
            WorkName: data.WorkName,
            Description: data.Description,
            DueDate: data.DueDate,
            AddedDate: data.AddedDate,
            classId: data.classId,
            fileUrl: data.fileUrl,
        });
        const result = await newWork.save();
        return result;
    }
    async getClassWork(_id) {
        const work = await this.workModel.find({ classId: _id });
        if (!work) {
            throw new common_1.NotFoundException("No work associated with the class!");
        }
        else {
            return work;
        }
    }
};
WorkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(work_schema_1.Work.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], WorkService);
exports.WorkService = WorkService;
//# sourceMappingURL=work.service.js.map