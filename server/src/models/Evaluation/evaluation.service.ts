import { Injectable, NotFoundException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { Evaluation } from "./evaluation.schema";
import { CreateEvaluationDto } from "./createEvaluation.dto";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class EvaluationService {
  constructor(
    @InjectModel(Evaluation.name)
    private readonly evaluationModel: Model<Evaluation>
  ) {}

  //Create Evaluation
  async createEvaluation(data: CreateEvaluationDto) {
    const newEvaluation = new this.evaluationModel({
      EvaluationName: data.EvaluationName,
      Description: data.Description,
      DateAdded: data.DateAdded,
      classId: data.classId,
      teacherId: data.teacherId,
      fileUrl: data.fileUrl,
    });
    const result = await newEvaluation.save();
    return result;
  }

  //get evaluations by classId
  async getEvaluationsByClass(classId: ObjectId) {
    const evaluations = await this.evaluationModel.find({ classId: classId });
    if (evaluations) {
      return evaluations;
    } else {
      return new NotFoundException(
        "No evaluations were added to this class yet!"
      );
    }
  }
}
