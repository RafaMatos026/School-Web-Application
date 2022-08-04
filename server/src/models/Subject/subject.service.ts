import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Subject } from './subject.schema';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private readonly subjectModel: Model<Subject>,
  ) {}

  //Create Subject
  async createSubject(Description: string): Promise<Subject> {
    const newSubject = new this.subjectModel({
      Description: Description,
    });
    const result = await newSubject.save();
    //console.log(result);
    return newSubject;
  }

  //Get all subjects
  async getSubjects() {
    const subjects = this.subjectModel.find({});
    if (subjects) {
      return subjects;
    } else {
      throw new NotFoundException('No class subjects found!');
    }
  }

  //Get subject
  async getSubject(_id: string) {
    const subject = await this.subjectModel.findById(_id);
    if (subject) {
      return subject;
    } else {
      throw new NotFoundException('Subject not found!');
    }
  }

  //Delete subject
  async deleteSubject(_id: string) {
    await this.subjectModel.deleteOne({ _id: _id });
    return;
  }
}
