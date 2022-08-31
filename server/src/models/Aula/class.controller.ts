import { Controller, Post, Body, Get, Param, Put } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { ClassService } from "./class.service";
import { CreateClassDto } from "./dto/createClass.dto";
import { UpdateClassDto } from "./dto/updateClass.dto";

@Controller("classes")
export class ClassController {
  constructor(private readonly ClassService: ClassService) {}

  //Create class
  @Post("create")
  async createClass(@Body() createClassDto: CreateClassDto) {
    return await this.ClassService.createClass(createClassDto);
  }

  //Get active classes
  @Get("getActiveClasses")
  async getActiveClasses() {
    const classes = await this.ClassService.getActiveClasses();
    return classes;
  }

  //Get disabled classes
  @Get("getDisabledClasses")
  async getDisabledClasses() {
    const classes = await this.ClassService.getDisabledClasses();
    return classes;
  }

  //Get class by id
  @Get("getClass/:id")
  async getClass(@Param("id") classId: string) {
    const clas = await this.ClassService.getClass(classId);
    return clas;
  }

  //Update class
  @Put("updateClass/:id")
  async updateClass(
    @Param("id") _id: string,
    @Body() UpdateClassDto: UpdateClassDto
  ) {
    await this.ClassService.updateClass(_id, UpdateClassDto);
  }

  //Disable class
  @Put("deleteClass/:id")
  async deleteClass(@Param("id") classId: string) {
    await this.ClassService.disableClass(classId);
  }

  //Assign teachers
  @Put("assignTeachers/:id")
  async assignTeachers(
    @Param("id") _id: ObjectId,
    @Body() teachers: ObjectId[]
  ) {
    await this.ClassService.assignTeachers(_id, teachers);
  }

  //Assign students
  @Put("assignStudents/:id")
  async assignStudents(
    @Param("id") _id: ObjectId,
    @Body() students: ObjectId[]
  ) {
    await this.ClassService.assignStudents(_id, students);
  }

  //Assigned Students
  @Get("assignedStudents/:id")
  async assignedStudents(@Param("id") _id: string) {
    return await this.ClassService.assignedStudents(_id);
  }

  //Assigned Teachers
  @Get("assignedTeachers/:id")
  async assignedTeachers(@Param("id") _id: string) {
    return await this.ClassService.assignedTeachers(_id);
  }
}
