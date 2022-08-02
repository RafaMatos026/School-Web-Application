import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Class } from './class.schema';
import { User } from '../User/user.schema';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class.name) private readonly classModel: Model<Class>,
  ) {}

  //Create a class
  async createClass(CreateClassDto: CreateClassDto): Promise<Class> {
    const newClass = new this.classModel({
      ClassName: CreateClassDto.ClassName,
      Subject: CreateClassDto.Subject,
      HeadTeacher: CreateClassDto.HeadTeacher,
      Status: CreateClassDto.Status,
      AssignedStudents: CreateClassDto.AssignedStudents,
      AssignedTeachers: CreateClassDto.AssignedTeachers,
    });
    const result = await newClass.save();
    return result;
  }

  //Get all classes
  async getClasses(): Promise<Class[]> {
    const result = await this.classModel.find({});
    if (result) {
      return result;
    } else {
      throw new NotFoundException('No classes found!');
    }
  }

  //Find class by id
  async getClass(_id: string): Promise<Class> {
    const result = await this.classModel.findById(_id);

    if (!result) {
      throw new NotFoundException('Could not find class!');
    }

    return result;
  }

  //Update class
  async updateClass(_id: string, UpdateClassDto: UpdateClassDto) {
    const update = {
      ClassName: UpdateClassDto.ClassName,
      HeadTeacher: UpdateClassDto.HeadTeacher,
      AssignedTeachers: UpdateClassDto.AssignedTeachers,
      AssignedStudents: UpdateClassDto.AssignedStudents,
      Subject: UpdateClassDto.Subject,
    };
    await this.classModel.findByIdAndUpdate(_id, update);
  }

  //Delete class
  async deleteClass(_id: string) {
    await this.classModel.deleteOne({ _id: _id });
    return;
  }
}
