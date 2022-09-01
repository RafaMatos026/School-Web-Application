import { IsNotEmpty, Length } from "class-validator";
import { ObjectId } from "mongoose";
import { Class } from "../Aula/class.schema";

export class CreateWorkDto {
  @IsNotEmpty({ message: "Class must have a name!" })
  @Length(6, 20, { message: "Class name must be between 6 to 20 characters!" })
  WorkName: string;

  @IsNotEmpty({ message: "Work must be associated to a class!" })
  classId: Class;

  @IsNotEmpty({ message: "Work must be associated to a user!" })
  userId: ObjectId;

  @IsNotEmpty({ message: "Work must have a url associated with!" })
  fileUrl: string;

  Description: string;

  DueDate: Date;

  @IsNotEmpty({ message: "Work must have an added date!" })
  AddedDate: Date;
}
