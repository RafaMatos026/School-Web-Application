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
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const class_schema_1 = require("./class.schema");
let ClassService = class ClassService {
    constructor(classModel) {
        this.classModel = classModel;
    }
    async createClass(ClassName, Subject, HeadTeacher, AssignedTeacher, Status) {
        const newClass = new this.classModel({
            ClassName: ClassName,
            Subject: Subject,
            HeadTeacher: HeadTeacher,
            AssignedTeacher: AssignedTeacher,
            Status: Status,
        });
        const result = await newClass.save();
        return result;
    }
    async getClasses() {
        const result = await this.classModel.find({});
        if (result) {
            console.log(result);
        }
        else {
            console.log('ERROR');
        }
    }
    async getClass(classId) {
        const result = this.classModel.find({ _id: classId });
        if (!result) {
            throw new common_1.NotFoundException('Could not find class!');
        }
        else {
            return result;
        }
    }
};
ClassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(class_schema_1.Class.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ClassService);
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map