import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { CreateStudentDto } from "./dto/createStudent.dto";
import { CreateTeacherDto } from "./dto/createTeacher.dto";
import { ObjectId } from "mongoose";
import { Public } from "src/auth/decorators/isPublic.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

@Controller("users")
export class UserController {
  constructor(private readonly UserService: UserService) {}

  //Create User
  @Post("create")
  async createUser(@Body() CreateUserDto: CreateUserDto) {
    return await this.UserService.createUser(CreateUserDto);
  }

  //Create Student
  @Post("/createStudent")
  async createStudent(@Body() CreateStudentDto: CreateStudentDto) {
    return await this.UserService.createStudent(CreateStudentDto);
  }

  //Create teacher
  @Post("/createTeacher")
  async createTeacher(@Body() CreateTeacherDto: CreateTeacherDto) {
    return await this.UserService.createTeacher(CreateTeacherDto);
  }

  //Get user by id
  @Get("/getUser/:id")
  async getUser(@Param("id") _id: string) {
    return await this.UserService.getUser(_id);
  }

  //Fetch all users
  @Get("getUsers")
  async getUsers() {
    return await this.UserService.getUsers();
  }

  //Fetch teachers
  @Get("getTeachers")
  async getTeachers() {
    return await this.UserService.getTeachers();
  }

  //Fetch students
  @Get("getStudents")
  async getStudents() {
    return await this.UserService.getStudents();
  }

  //Get disabled students
  @Get("getDisabledStudents")
  async getDisabledStudents() {
    const students = await this.UserService.getDisabledStudents();
    return students;
  }

  //Get disabled students
  @Get("getDisabledTeachers")
  async getDisabledTeachers() {
    const teachers = await this.UserService.getDisabledTeachers();
    return teachers;
  }

  //Get active students
  @Get("getActiveStudents")
  async getActiveStudents() {
    const students = await this.UserService.getActiveStudents();
    return students;
  }

  //Fetch registration requests
  @Get("/registrationRequests")
  async getRequests() {
    return await this.UserService.getRequests();
  }

  //Update User
  @Put("updateUser/:id")
  async updateUser(
    @Param("id") _id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    await this.UserService.updateUser(_id, updateUserDto);
  }

  //Disable User
  @Put("disableUser/:id")
  async deleteUser(@Param("id") _id: string) {
    await this.UserService.disableUser(_id);
  }

  //Accept teacher registration
  @Put("acceptTeacher/:id")
  async acceptTeacher(@Param("id") _id: string) {
    await this.UserService.acceptTeacher(_id);
  }

  //Decline teacher registration
  @Put("declineTeacher/:id")
  async declineTeacher(@Param("id") _id: string) {
    await this.UserService.declineTeacher(_id);
  }

  //Assignable students
  @Get("assignableStudents/:id")
  async assignableStudents(@Param("id") _id: ObjectId) {
    return await this.UserService.assignableStudents(_id);
  }

  //Assignable teachers
  @Get("assignableTeachers/:id")
  async assignableTeachers(@Param("id") _id: ObjectId) {
    return await this.UserService.assignableTeachers(_id);
  }

  //Find user by email
  @Get("getByEmail")
  async getByEmail(@Body("Email") email: string) {
    return await this.UserService.findByEmail(email);
  }

  //Get classes the user is assigned to;

  @Get("myClasses/:_id")
  async getMyClasses(@Param("_id") _id: ObjectId) {
    return await this.UserService.getMyClasses(_id);
  }

  //Get profile picture
  @Get("getProfilePic/:_id")
  async getProfilePic(@Param("_id") _id: ObjectId) {
    return await this.UserService.getProfilePic(_id);
  }

  //Forgot my password
  @Post("forgotPassword")
  async forgotPassword(@Body("Email") Email: string) {
    await this.UserService.forgotPassword(Email);
  }
}
