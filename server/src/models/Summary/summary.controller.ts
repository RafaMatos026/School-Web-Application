import { Controller, Post, Get, Body, Param } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { Public } from "src/auth/decorators/isPublic.decorator";
import { CreateSummaryDto } from "./dto/createSummary.dto";
import { SummaryService } from "./summary.service";

@Controller("summaries")
export class SummaryController {
  constructor(private readonly SummaryService: SummaryService) {}

  //Create summary
  @Public()
  @Post("create")
  async createSummary(@Body() CreateSummaryDto: CreateSummaryDto) {
    const summary = await this.SummaryService.createSummary(CreateSummaryDto);
    return summary;
  }

  //Get all summarys
  @Public()
  @Get("getSummaries")
  async getSummarys() {
    const summarys = await this.SummaryService.getSummarys();
    return summarys;
  }

  @Public()
  @Get("getSummary/:id")
  async getSummary(@Param("id") _id: string) {
    const summary = await this.SummaryService.getSummary(_id);
    return summary;
  }

  @Public()
  @Get("getSummariesClass/:_id")
  async getSummariesClass(@Param("_id") _id: ObjectId) {
    const summaries = await this.SummaryService.getSummariesByClass(_id);
    return summaries;
  }
}
