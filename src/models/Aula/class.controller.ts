import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
import { ClassService } from './class.service';

@Controller('classes')
export class ClassController {
  constructor(private readonly ClassService: ClassService) {}
  @Post('create')
  createClass(
    @Body('ClassName') ClassName: string,
    @Body('Subject') Subject: Subject,
    @Body('HeadTeacher') HeadTeacher: User,
    @Body('AssignedTeachers') AssignedTeachers: User[],
    @Body('Status') Status: boolean,
  ) {
    return this.ClassService.createClass(
      ClassName,
      Subject,
      HeadTeacher,
      AssignedTeachers,
      Status,
    );
  }

  @Get('getClasses')
  getClasses() {
    return this.ClassService.getClasses();
  }

  @Get('getClass:id')
  getClass(@Param('id') classId: string) {
    return this.ClassService.getClass(classId);
  }
}
