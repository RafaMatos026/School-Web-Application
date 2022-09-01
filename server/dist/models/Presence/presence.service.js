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
exports.PresenceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const presence_schema_1 = require("./presence.schema");
let PresenceService = class PresenceService {
    constructor(presenceModel) {
        this.presenceModel = presenceModel;
    }
    async newSurvey(newSurveyDto) {
        const newSurvey = new this.presenceModel({
            Date: Date.now(),
            classId: newSurveyDto.classId,
            presentStudents: newSurveyDto.presentStudents,
            absentStudents: newSurveyDto.absentStudents,
        });
        const result = await newSurvey.save();
        return result;
    }
    async markPresence(_id, studenId, Present) {
        const survey = await this.presenceModel.findById(_id);
        if (survey) {
            const presents = survey.presentStudents;
            if (presents.includes(studenId)) {
                return false;
            }
            if (Present) {
                await this.presenceModel.findByIdAndUpdate({ _id: _id }, {
                    $push: { presentStudents: studenId },
                });
            }
            else {
                await this.presenceModel.findByIdAndUpdate({ _id: _id }, {
                    $push: { absentStudents: studenId },
                });
            }
            return true;
        }
        return;
    }
    async closeSurvey(_id) {
        await this.presenceModel.findByIdAndUpdate({
            _id: _id,
        }, {
            open: false,
        });
    }
    async getSurveys(classId) {
        const surveys = await this.presenceModel.find({
            classId: classId,
        });
        if (surveys) {
            return surveys;
        }
        else {
            throw new common_1.NotFoundException("No presence forms for this class yet!");
        }
    }
    async getAbsents(_id) {
        return await this.presenceModel
            .findById(_id)
            .select("absentStudents presentStudents");
    }
    async getLatestSurvey(classId) {
        const survey = await this.presenceModel
            .findOne({ classId: classId, open: true })
            .sort({ Date: -1 })
            .limit(1);
        if (survey) {
            return survey;
        }
        else {
            throw new common_1.NotFoundException("No presence forms for this class yet!");
        }
    }
    async markAbsenceJustified(_id, studenId) {
        const survey = await this.presenceModel.findByIdAndUpdate({ _id: _id }, {
            $push: { justifiedAbsences: studenId },
        });
    }
};
PresenceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(presence_schema_1.Presence.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PresenceService);
exports.PresenceService = PresenceService;
//# sourceMappingURL=presence.service.js.map