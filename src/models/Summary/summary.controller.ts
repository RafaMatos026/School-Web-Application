import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { Summary } from './summary.schema';
import { SummaryService } from './summary.service';

@Controller('summarys')
export class SummaryController {
  constructor(private readonly SummaryService: SummaryService) {}

  //Create summary
  @Post('create')
  async createSummary(
    @Body('Date') Date: Date,
    @Body('Description') Description: string,
  ) {
    const summary = await this.SummaryService.createSummary(Date, Description);
    return summary;
  }

  //Get all summarys
  @Get('getSummarys')
  async getSummarys() {
    const summarys = await this.SummaryService.getSummarys();
    return summarys;
  }

  @Get('getSummary/:id')
  async getSummary(@Param('id') _id: string) {
    const summary = await this.SummaryService.getSummary(_id);
    return summary;
  }
}
