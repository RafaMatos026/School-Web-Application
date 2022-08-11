import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateWorkDto } from './createWork.dto';
import { WorkService } from './work.service';

@Controller('works')
export class WorkController {
  constructor(private readonly WorkService: WorkService) {}

  //Add work
  @Post('create')
  async createType(@Body() data: CreateWorkDto) {
    return await this.WorkService.createWork(data);
  }

  //Get works submitted from a class
  @Get('getType/:id')
  async getType(@Param('id') classId: string) {
    return await this.WorkService.getClassWork(classId);
  }
}
