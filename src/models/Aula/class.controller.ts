import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/createClass.dto';

@Controller('classes')
export class ClassController {
  constructor(private readonly ClassService: ClassService) {}

  //Create class
  @Post('create')
  async createClass(@Body() createClassDto: CreateClassDto) {
    return await this.ClassService.createClass(createClassDto);
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
