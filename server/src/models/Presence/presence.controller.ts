import { Controller, Post, Get, Param, Body, Put } from "@nestjs/common";
import { PresenceService } from "./presence.service";
import { newSurveyDto } from "./dto's/newSurvey.dto";
import { ObjectId } from "mongoose";
import { Public } from "src/auth/decorators/isPublic.decorator";

@Controller("presences")
export class PresenceController {
  constructor(private readonly PresenceService: PresenceService) {}

  @Post("create")
  async createPresence(@Body() newSurveyDto: newSurveyDto) {
    const survey = await this.PresenceService.newSurvey(newSurveyDto);
    return survey;
  }

  //Get present and absent students from a presence instance
  @Get("getPresences/:_id")
  async getAbsents(@Param("_id") _id: string) {
    const absents = await this.PresenceService.getPresences(_id);
    return absents;
  }

  @Get("getSurveys/:classId")
  async getSurveys(@Param("classId") classId: string) {
    const surveys = await this.PresenceService.getSurveys(classId);
    return surveys;
  }

  @Put("markPresence/")
  async markPresence(
    @Body("studentId") studentId: ObjectId,
    @Body("_id") _id: string,
    @Body("Present") Present: boolean
  ) {
    const success = await this.PresenceService.markPresence(
      _id,
      studentId,
      Present
    );
    return success;
  }

  @Put("closeSurvey/:_id")
  async closeSurvey(@Param("_id") _id: string) {
    await this.PresenceService.closeSurvey(_id);
  }

  @Get("latestSurvey/:classId")
  async lastestSurvey(@Param("classId") classId: string) {
    const survey = await this.PresenceService.getLatestSurvey(classId);
    return survey;
  }

  @Put("justify/:_id")
  async markPresenceJustified(
    @Param("_id") _id: ObjectId,
    @Body("studentId") studentId: ObjectId
  ) {
    await this.PresenceService.markAbsenceJustified(_id, studentId);
  }
}
