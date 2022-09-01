import { IsNotEmpty, Length } from "class-validator";
import { ObjectId } from "mongoose";
import { Class } from "../Aula/class.schema";

export class CreateEvaluationDto {
  @IsNotEmpty({ message: "Evaluation must have a name!" })
  @Length(6, 20, {
    message: "Evaluation name must be between 6 to 20 characters!",
  })
  EvaluationName: string;

  DateAdded: Date;

  @IsNotEmpty({ message: "Evaluation must be submitted by a teacher!" })
  teacherId: ObjectId;

  @IsNotEmpty({ message: "Evaluation must be associated to a class!" })
  classId: ObjectId;

  @IsNotEmpty({ message: "Evaluation must have a url associated with!" })
  fileUrl: string;
}
