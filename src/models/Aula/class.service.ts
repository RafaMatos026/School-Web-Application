import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Class, ClassDocument } from './class.schema';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class.name) private classModel: Model<ClassDocument>,
  ) {}

  async createClass(
    ClassName: string,
    Subject: Subject,
    HeadTeacher: User,
    AssignedTeacher: User[],
    Status: boolean,
  ) {
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

  async getClasses() {
    const result = await this.classModel.find({});
    if (result) {
      console.log(result);
    } else {
      console.log('ERROR');
    }
  }

  async getClass(classId: string) {
    const result = this.classModel.find({ _id: classId });
    if (!result) {
      throw new NotFoundException('Could not find class!');
    } else {
      return result;
    }
  }
}
