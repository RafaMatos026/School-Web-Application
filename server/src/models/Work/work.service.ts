import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Work } from "./work.schema";
import { CreateWorkDto } from "./createWork.dto";

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work.name) private readonly workModel: Model<Work>
  ) {}

  //Create work
  async createWork(data: CreateWorkDto) {
    const newWork = new this.workModel({
      WorkName: data.WorkName,
      Description: data.Description,
      DueDate: data.DueDate,
      AddedDate: data.AddedDate,
      classId: data.classId,
      fileUrl: data.fileUrl,
      userId: data.userId
    });
    const result = await newWork.save();
    return result;
  }

  //get all work associated with a class
  async getClassWork(_id: string): Promise<Work[]> {
    const works = await this.workModel.find({ classId: _id });
    if (!works) {
      throw new NotFoundException("No work associated with the class!");
    } else {
      return works;
    }
  }

  //Delete submitted work

}
