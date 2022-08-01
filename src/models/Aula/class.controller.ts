import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
import { ClassService } from './class.service';

@Controller('classes')
export class ClassController {
  constructor(private readonly ClassService: ClassService) {}

  //Create class
  @Post('create')
  async createClass(
    @Body('ClassName') ClassName: string,
    @Body('Subject') Subject: Subject,
    @Body('HeadTeacher') HeadTeacher: User,
    @Body('AssignedTeachers') AssignedTeachers: User[],
    @Body('Status') Status: boolean,
  ) {
    return await this.ClassService.createClass(
      ClassName,
      Subject,
      HeadTeacher,
      AssignedTeachers,
      Status,
    );
  }

  //Get all classes
  @Get('getClasses')
  async getClasses() {
    const classes = await this.ClassService.getClasses();
    return classes;
  }

  //Get class by id
  @Get('getClass/:id')
  async getClass(@Param('id') classId: string) {
    const clas = await this.ClassService.getClass(classId);
    return clas;
  }

  //Update class
  @Put('updateClass/:id')
  async updateClass(@Param('id') classId: string) {
    const clas = await this.updateClass(classId);
    return clas;
  }

  //Delete class
  @Put('deleteClass/:id')
  async deleteClass(@Param('id') classId: string) {
    await this.ClassService.deleteClass(classId);
  }
}
