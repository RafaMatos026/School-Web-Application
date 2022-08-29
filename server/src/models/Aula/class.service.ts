import { Injectable, NotFoundException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Class } from "./class.schema";
import { CreateClassDto } from "./dto/createClass.dto";
import { UpdateClassDto } from "./dto/updateClass.dto";
import { User } from "../User/user.schema";
import { UserService } from "../User/user.service";

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class.name) private readonly classModel: Model<Class>,
    private readonly userService: UserService
  ) {}

  //Create a class
  async createClass(CreateClassDto: CreateClassDto): Promise<Class> {
    const newClass = new this.classModel({
      ClassName: CreateClassDto.ClassName,
      Subject: CreateClassDto.Subject,
      HeadTeacher: CreateClassDto.HeadTeacher,
      AssignedStudents: CreateClassDto.AssignedStudents,
      AssignedTeachers: CreateClassDto.AssignedTeachers,
    });
    const result = await newClass.save();
    return result;
  }

  //Get active classes
  async getActiveClasses(): Promise<Class[]> {
    const result = await this.classModel.find({ Status: true });
    if (result) {
      return result;
    } else {
      throw new NotFoundException("No classes found!");
    }
  }

  //Get disabled classes
  async getDisabledClasses(): Promise<Class[]> {
    const result = await this.classModel.find({ Status: false });
    if (result) {
      return result;
    } else {
      throw new NotFoundException("No classes found!");
    }
  }

  //Find class by id
  async getClass(_id: string): Promise<Class> {
    const result = await this.classModel.findById(_id);

    if (!result) {
      throw new NotFoundException("Could not find class!");
    }

    return result;
  }

  //Update class
  async updateClass(_id: string, UpdateClassDto: UpdateClassDto) {
    const update = {
      ClassName: UpdateClassDto.ClassName,
      HeadTeacher: UpdateClassDto.HeadTeacher,
      Subject: UpdateClassDto.Subject,
    };
    await this.classModel.findByIdAndUpdate(_id, update);
  }

  //Delete class
  async disableClass(_id: string) {
    await this.classModel.findByIdAndUpdate({ _id: _id }, { Status: false });
    return;
  }

  //Assign teachers to class
  async assignTeachers(_id: ObjectId, teachers: ObjectId[]) {
    for (const teacher of teachers) {
      await this.userService.updateMyClasses(teacher, _id);
    }
    await this.classModel.updateMany(
      { _id: _id },
      {
        $push: { AssignedTeachers: { $each: teachers } },
      },
      { new: true }
    );
    return;
  }

  //Assign students to class
  async assignStudents(_id: ObjectId, students: ObjectId[]) {
    for (const student of students) {
      await this.userService.updateMyClasses(student, _id);
    }
    await this.classModel.updateMany(
      { _id: _id },
      {
        $push: { AssignedStudents: { $each: students } },
      },
      { new: true }
    );
    return;
  }

  //Assigned students
  async assignedStudents(_id: string) {
    return await (
      await this.classModel.findOne({ _id: _id })
    ).AssignedStudents;
  }

  //Assigned teachers
  async assignedTeachers(_id: string) {
    return await (
      await this.classModel.findOne({ _id: _id })
    ).AssignedTeachers;
  }
}
