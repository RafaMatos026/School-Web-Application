import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Work } from './work.schema';
import { CreateWorkDto } from './createWork.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work.name) private readonly workModel: Model<Work>,
  ) {}

  //Create user type
  async createWork(data: CreateWorkDto) {
    const newWork = new this.workModel({
      WorkName: data.WorkName,
      DueDate: data.DueDate,
      classId: data.classId,
      Description: data.Description,
    });
    const result = await newWork.save();
    return result;
  }

  //get all work associated with a class
  async getClassWork(_id: string): Promise<Work[]> {
    const work = await this.workModel.find({ classId: _id });
    if (!work) {
      throw new NotFoundException('No work associated with the class!');
    } else {
      return work;
    }
  }
}