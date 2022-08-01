import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Subject } from './subject.schema';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private readonly subjectModel: Model<Subject>,
  ) {}

  async createSubject(Description: string): Promise<Subject> {
    const newSubject = new this.subjectModel({
      Description: Description,
    });
    const result = await newSubject.save();
    //console.log(result);
    return newSubject;
  }

  async getSubjects() {
    const subjects = this.subjectModel.find({});
    if (subjects) {
      return subjects;
    } else {
      throw new NotFoundException('No class subjects found!');
    }
  }
}
