import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { Subject } from './subject.schema';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly SubjectService: SubjectService) {}

  @Post('create')
  createSubject(@Body('Description') Description: string) {
    return this.SubjectService.createSubject(Description);
  }

  @Get('getSubjects')
  getSubjects() {
    return this.SubjectService.getSubjects();
  }
}
