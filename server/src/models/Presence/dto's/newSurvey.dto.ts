import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";

export class newSurveyDto {
  Date: Date;

  @IsNotEmpty({ message: "Presence survey must be associated to a class!" })
  classId: string;

  absentStudents: ObjectId[];
  presentStudents: ObjectId[];
  justifiedAbsences: ObjectId[];
}
