import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateStudentDto } from './dto/createStudent.dto';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { ObjectId } from 'mongoose';
import { Public } from 'src/auth/decorators/isPublic.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  //Create User
  @Post('create')
  async createUser(@Body() CreateUserDto: CreateUserDto) {
    const existingUser = this.UserService.findByEmail(CreateUserDto.Email);
    if (existingUser) {
      return { success: false, message: 'Email already taken!' };
    }
    return await this.UserService.createUser(CreateUserDto);
  }

  //Create Student
  @Post('/createStudent')
  async createStudent(@Body() CreateStudentDto: CreateStudentDto) {
    return await this.UserService.createStudent(CreateStudentDto);
  }

  //Create teacher
  @Post('/createTeacher')
  async createTeacher(@Body() CreateTeacherDto: CreateTeacherDto) {
    return await this.UserService.createTeacher(CreateTeacherDto);
  }

  //Get user by id
  @Get('/getUser/:id')
  async getUser(@Param('id') _id: string) {
    return await this.UserService.getUser(_id);
  }

  //Fetch all users
  @Public()
  @Get('getUsers')
  async getUsers() {
    return await this.UserService.getUsers();
  }

  //Fetch teachers
  @Public()
  @Get('getTeachers')
  async getTeachers() {
    return await this.UserService.getTeachers();
  }

  //Fetch students
  @Public()
  @Get('getStudents')
  async getStudents() {
    return await this.UserService.getStudents();
  }

  //Get disabled students
  @Public()
  @Get('getDisabledStudents')
  async getDisabledStudents() {
    const students = await this.UserService.getDisabledStudents();
    return students;
  }

  //Get disabled students
  @Public()
  @Get('getDisabledTeachers')
  async getDisabledTeachers() {
    const teachers = await this.UserService.getDisabledTeachers();
    return teachers;
  }

  //Get active students
  @Public()
  @Get('getActiveStudents')
  async getActiveStudents() {
    const students = await this.UserService.getActiveStudents();
    return students;
  }

  //Fetch registration requests
  @Public()
  @Get('/registrationRequests')
  async getRequests() {
    return await this.UserService.getRequests();
  }

  //Update User
  @Put('updateUser/:id')
  async updateUser(
    @Param('id') _id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.UserService.updateUser(_id, updateUserDto);
  }

  //Disable User
  @Put('disableUser/:id')
  async deleteUser(@Param('id') _id: string) {
    await this.UserService.disableUser(_id);
  }

  //Accept teacher registration
  @Put('acceptTeacher/:id')
  async acceptTeacher(@Param('id') _id: string) {
    await this.UserService.acceptTeacher(_id);
  }

  //Decline teacher registration
  @Put('declineTeacher/:id')
  async declineTeacher(@Param('id') _id: string) {
    await this.UserService.declineTeacher(_id);
  }

  //Assignable students
  @Public()
  @Get('assignableStudents/:id')
  async assignableStudents(@Param('id') _id: ObjectId) {
    return await this.UserService.assignableStudents(_id);
  }

  //Find user by email
  @Get('getByEmail')
  async getByEmail(@Body('Email') email: string) {
    return await this.UserService.findByEmail(email);
  }
}
