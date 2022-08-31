import { IsNotEmpty, Length } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateSummaryDto {
  @IsNotEmpty({ message: "Summary must have a name!" })
  @Length(5, 15, {
    message: "Name must be between 5 and 15 characters!",
  })
  SummaryName: string;

  @IsNotEmpty({ message: "Summary must have a date of creatiion!" })
  Date: Date;

  @Length(5, 50, {
    message: "Summary description must have between 10 to 50 characters!",
  })
  Description: string;

  @IsNotEmpty({ message: "Summary must belong to a class!" })
  classId: ObjectId;
}
