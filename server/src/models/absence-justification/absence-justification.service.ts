import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { AbsenceJustification } from "./absence-justification.schema";
import { CreateAbsenceJustificationDto } from "./createAbsenceJustification.dto";

@Injectable()
export class AbsenceJustificationService {
  constructor(
    @InjectModel(AbsenceJustification.name)
    private readonly absencejustificationModel: Model<AbsenceJustification>
  ) {}

  //add absence justification
  async addAbsenceJustification(data: CreateAbsenceJustificationDto) {
    const newAbsenceJustification = new this.absencejustificationModel({
      classId: data.classId,
      studentId: data.studentId,
      DateAdded: data.DateAdded,
      fileUrl: data.fileUrl
    });

    const result = await newAbsenceJustification.save();
    return result;
  }

  //get absence justification from a class
  async getJustificationsByClass(classId: ObjectId) {
    const justifications = await this.absencejustificationModel
      .find({
        classId: classId,
      })
      .exec();
    if (justifications) {
      return justifications;
    } else {
      throw new NotFoundException(
        "No absence justifications for this class yet!"
      );
    }
  }
}
