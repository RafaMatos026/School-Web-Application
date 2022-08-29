import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { Public } from 'src/auth/decorators/isPublic.decorator';
import { Subject } from './subject.schema';
import { SubjectService } from './subject.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly SubjectService: SubjectService) {}

  @Public()
  @Post('create')
  async createSubject(@Body('Description') Description: string) {
    const subject = await this.SubjectService.createSubject(Description);
    return subject;
  }

  @Public()
  @Get('getSubjects')
  async getSubjects() {
    const subjects = await this.SubjectService.getSubjects();
    return subjects;
  }

  @Public()
  @Get('getSubject/:id')
  async getSubject(@Param('id') subjectId: string) {
    const subject = await this.SubjectService.getSubject(subjectId);
    return subject;
  }

  @Public()
  @Put('deleteSubject/:id')
  async deleteSubject(@Param('id') subjectId: string) {
    const subject = await this.SubjectService.deleteSubject(subjectId);
    return subject;
  }
}
