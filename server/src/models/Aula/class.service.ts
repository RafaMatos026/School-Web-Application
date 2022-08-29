import { Injectable, NotFoundException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Class } from "./class.schema";
import { CreateClassDto } from "./dto/createClass.dto";
import { UpdateClassDto } from "./dto/updateClass.dto";
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
    // if (result) {
    //   let HeadTeacher = CreateClassDto.HeadTeacher;
    //   let classId = result._id.toString();
    //   await this.userService.updateMyClasses(HeadTeacher, classId);
    // }
    return result;
  }

  //Get active classes
  async getActiveClasses(): Promise<Class[]> {
    const result = await this.classModel
      .find({ Status: true })
      .populate("HeadTeacher")
      .exec();
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
  async getClass(_id: string) {
    const result = await this.classModel.findById(_id);
    const aula = {
      _id: result._id,
      ClassName: result.ClassName,
      Subject: result.Subject,
      HeadTeacher: result.HeadTeacher,
      Status: result.Status,
    };

    if (!result) {
      throw new NotFoundException("Could not find class!");
    }

    return aula;
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
      await this.userService.addToMyClasses(teacher, _id);
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
      await this.userService.addToMyClasses(student, _id);
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

  //remove students from class
  async unassignStudent(_id: ObjectId, students: ObjectId[]) {
    for (const student of students) {
      await this.userService.removeFromMyClasses(student, _id);
    }
    await this.classModel.updateOne(
      { _id: _id },
      {
        $pullAll: {
          AssignedStudents: students,
        },
      }
    );
    return;
  }

    //remove teachers from class
    async unassignTeacher(_id: ObjectId, teachers: ObjectId[]) {
      for (const teacher of teachers) {
        await this.userService.removeFromMyClasses(teacher, _id);
      }
      await this.classModel.updateOne(
        { _id: _id },
        {
          $pullAll: {
            AssignedTeachers: teachers,
          },
        }
      );
      return;
    }
}
