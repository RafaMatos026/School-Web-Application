import { Injectable, NotFoundException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Presence } from "./presence.schema";
import { newSurveyDto } from "./dto's/newSurvey.dto";

@Injectable()
export class PresenceService {
  constructor(
    @InjectModel(Presence.name) private readonly presenceModel: Model<Presence>
  ) {}

  //create new presence survey
  async newSurvey(newSurveyDto: newSurveyDto): Promise<Presence> {
    const newSurvey = new this.presenceModel({
      Date: Date.now(),
      classId: newSurveyDto.classId,
      presentStudents: newSurveyDto.presentStudents,
      absentStudents: newSurveyDto.absentStudents,
    });
    const result = await newSurvey.save();
    return result;
  }

  //mark presence
  async markPresence(
    _id: string,
    studenId: ObjectId,
    Present: boolean
  ): Promise<boolean> {
    const survey = await this.presenceModel.findById(_id);
    if (survey) {
      const presents = survey.presentStudents;
      if (presents.includes(studenId)) {
        return false;
      }
      if (Present) {
        await this.presenceModel.findByIdAndUpdate(
          { _id: _id },
          {
            $push: { presentStudents: studenId },
          }
        );
      } else {
        await this.presenceModel.findByIdAndUpdate(
          { _id: _id },
          {
            $push: { absentStudents: studenId },
          }
        );
      }
      return true;
    }

    return;
  }

  //Close survey
  async closeSurvey(_id: string): Promise<void> {
    await this.presenceModel.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        open: false,
      }
    );
  }

  //get Presence Surveys from a class
  async getSurveys(classId: string) {
    const surveys = await this.presenceModel.find({
      classId: classId,
    });

    if (surveys) {
      return surveys;
    } else {
      throw new NotFoundException("No presence forms for this class yet!");
    }
  }

  //get present/absence students from a survey
  async getAbsents(_id: string) {
    return await this.presenceModel
      .findById(_id)
      .select("absentStudents presentStudents");
  }

  //Get the lastest attendance form from a class
  async getLatestSurvey(classId: string) {
    const survey: Presence = await this.presenceModel
      .findOne({ classId: classId, open: true })
      .sort({ Date: -1 })
      .limit(1);
    if (survey) {
      return survey;
    } else {
      throw new NotFoundException("No presence forms for this class yet!");
    }
  }

  //Mark absence justified
  async markAbsenceJustified(_id: ObjectId, studenId: ObjectId) {
    const survey = await this.presenceModel.findByIdAndUpdate(
      { _id: _id },
      {
        $push: { justifiedAbsences: studenId },
      }
    );
  }
}
