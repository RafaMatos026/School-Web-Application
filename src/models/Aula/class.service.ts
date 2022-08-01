import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Class, ClassDocument } from './class.schema';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
import { doc } from 'prettier';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class.name) private readonly classModel: Model<Class>,
  ) {}

  //Create a class
  async createClass(
    ClassName: string,
    Subject: Subject,
    HeadTeacher: User,
    AssignedTeacher: User[],
    Status: boolean,
  ): Promise<Class> {
    const newClass = new this.classModel({
      ClassName: ClassName,
      Subject: Subject,
      HeadTeacher: HeadTeacher,
      AssignedTeacher: AssignedTeacher,
      Status: Status,
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
  async updateClass(
    _id: string,
    ClassName: string,
    HeadTeacher: User,
    AssignedTeachers: User[],
    Status: boolean,
  ) {
    const doc = await this.classModel.findByIdAndUpdate(
      { _id: _id },
      {
        ClassName: ClassName,
        HeadTeacher: HeadTeacher,
        AssignedTeachers: AssignedTeachers,
        Status: Status,
      },
    );
  }

  //Delete class
  async deleteClass(_id: string) {
    await this.classModel.deleteOne({ _id: _id });
    return;
  }
}
