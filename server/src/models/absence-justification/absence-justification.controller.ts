import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { CreateAbsenceJustificationDto } from "./createAbsenceJustification.dto";
import { AbsenceJustificationService } from "./absence-justification.service";
import { ObjectId } from "mongoose";

@Controller("absence-justification")
export class AbsenceJustificationController {
  constructor(
    private readonly AbsenceJustificationService: AbsenceJustificationService
  ) {}

  //Add absence justification
  @Post("create")
  async createAbsenceJustification(
    @Body() data: CreateAbsenceJustificationDto
  ) {
    return await this.AbsenceJustificationService.addAbsenceJustification(data);
  }

  //Get absence justifications by class
  @Get("getAbsenceJustifications/:id")
  async getAbsenceJustificationsByClass(@Param("id") classId: ObjectId) {
    return await this.AbsenceJustificationService.getJustificationsByClass(
      classId
    );
  }
}
