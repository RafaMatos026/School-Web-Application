import { IsNotEmpty, Length } from "class-validator";
import { ObjectId } from "mongoose";
import { AbsenceJustification } from "./absence-justification.schema";

export class CreateAbsenceJustificationDto {
  @IsNotEmpty({
    message: "Absence justification must be associated to a student!",
  })
  studentId: ObjectId;

  @IsNotEmpty({
    message: "Absence justification must be associated to a class!",
  })
  classId: ObjectId;

  DateAdded: Date;

  @IsNotEmpty({
    message: "A file url must be associated to the absence justification!",
  })
  fileUrl: string;
}
