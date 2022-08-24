import { Controller, Post, Get, Param, Body, Put } from '@nestjs/common';
import { PresenceService } from './presence.service';
import { newSurveyDto } from "./dto's/newSurvey.dto";
import { ObjectId } from 'mongoose';
import { Public } from 'src/auth/decorators/isPublic.decorator';

@Controller('presences')
export class PresenceController {
  constructor(private readonly PresenceService: PresenceService) {}

  @Public()
  @Post('create')
  async createPresence(@Body() newSurveyDto: newSurveyDto) {
    const survey = await this.PresenceService.newSurvey(newSurveyDto);
    return survey;
  }

  @Public()
  @Get('getAbsents/:_id')
  async getAbsents(@Param('_id') _id: string) {
    const absents = await this.PresenceService.getAbsents(_id);
    return absents;
  }

  @Public()
  @Get('getPresents/:_id')
  async getPresents(@Param('_id') _id: string) {
    const presents = await this.PresenceService.getPresents(_id);
    return presents;
  }

  @Public()
  @Get('getSurveys/:classId')
  async getSurveys(@Param('classId') classId: string) {
    const surveys = await this.PresenceService.getSurveys(classId);
    return surveys;
  }

  @Public()
  @Put('markPresence/')
  async markPresence(
    @Body('studentId') studentId: ObjectId,
    @Body('_id') _id: string,
    @Body('Present') Present: boolean,
  ) {
    const success = await this.PresenceService.markPresence(
      _id,
      studentId,
      Present,
    );
    return success;
  }

  @Public()
  @Put('closeSurvey/:_id')
  async closeSurvey(@Param('_id') _id: string) {
    await this.PresenceService.closeSurvey(_id);
  }

  @Public()
  @Get('latestSurvey/:classId')
  async lastestSurvey(@Param('classId') classId: string) {
    const survey = await this.PresenceService.getLatestSurvey(classId);
    return survey;
  }
}
