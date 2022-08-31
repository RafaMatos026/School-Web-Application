import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { EvaluationService } from "./evaluation.service";
import { CreateEvaluationDto } from "./createEvaluation.dto";
import { ObjectId } from "mongoose";

@Controller("evaluation")
export class EvaluationController {
  constructor(private readonly EvaluationService: EvaluationService) {}

  //Add evaluation
  @Post("create")
  async createEvaluation(@Body() data: CreateEvaluationDto) {
    return await this.EvaluationService.createEvaluation(data);
  }

  //Get evaluations by classId
  @Get("getEvaluationsByClass/:id")
  async getEvaluationsByClass(@Param("id") classId: ObjectId) {
    return await this.EvaluationService.getEvaluationsByClass(classId);
  }
}
