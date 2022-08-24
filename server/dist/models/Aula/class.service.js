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
    async createClass(CreateClassDto) {
        const newClass = new this.classModel({
            ClassName: CreateClassDto.ClassName,
            Subject: CreateClassDto.Subject,
            HeadTeacher: CreateClassDto.HeadTeacher,
            AssignedStudents: CreateClassDto.AssignedStudents,
            AssignedTeachers: CreateClassDto.AssignedTeachers,
        });
        const result = await newClass.save();
        return result;
    }
    async getActiveClasses() {
        const result = await this.classModel.find({ Status: true });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException('No classes found!');
        }
    }
    async getDisabledClasses() {
        const result = await this.classModel.find({ Status: false });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException('No classes found!');
        }
    }
    async getClass(_id) {
        const result = await this.classModel.findById(_id);
        if (!result) {
            throw new common_1.NotFoundException('Could not find class!');
        }
        return result;
    }
    async updateClass(_id, UpdateClassDto) {
        const update = {
            ClassName: UpdateClassDto.ClassName,
            HeadTeacher: UpdateClassDto.HeadTeacher,
            Subject: UpdateClassDto.Subject,
        };
        await this.classModel.findByIdAndUpdate(_id, update);
    }
    async disableClass(_id) {
        await this.classModel.findByIdAndUpdate({ _id: _id }, { Status: false });
        return;
    }
    async assignTeachers(_id, teachers) {
        console.log(teachers);
        await this.classModel.findByIdAndUpdate({ _id: _id }, {
            $set: { AssignedTeachers: teachers.AssignedTeachers },
        }, { new: true });
        return;
    }
    async assignStudents(_id, students) {
        await this.classModel.findByIdAndUpdate({ _id: _id }, {
            $set: { AssignedStudents: students },
        }, { new: true });
        return;
    }
    async assignedStudents(_id) {
        const aula = await this.classModel.findOne({ _id: _id });
        let students = [];
        if (aula) {
            students = aula.AssignedStudents;
        }
        return students;
    }
    async assignedTeachers(_id) {
        const aula = await this.classModel.findOne({ _id: _id });
        let teachers = [];
        if (aula) {
            teachers = aula.AssignedTeachers;
        }
        return teachers;
    }
};
ClassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(class_schema_1.Class.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ClassService);
exports.ClassService = ClassService;
//# sourceMappingURL=class.service.js.map