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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const subject_schema_1 = require("./subject.schema");
let SubjectService = class SubjectService {
    constructor(subjectModel) {
        this.subjectModel = subjectModel;
    }
    async createSubject(Description) {
        const newSubject = new this.subjectModel({
            Description: Description,
        });
        const result = await newSubject.save();
        return newSubject;
    }
    async getSubjects() {
        const subjects = this.subjectModel.find({});
        if (subjects) {
            return subjects;
        }
        else {
            throw new common_1.NotFoundException('No class subjects found!');
        }
    }
};
SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(subject_schema_1.Subject.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map