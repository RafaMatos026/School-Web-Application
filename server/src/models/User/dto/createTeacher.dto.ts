import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { ObjectId } from "mongoose";

export class CreateTeacherDto {
  @IsNotEmpty({ message: "First name cannot be empty!" })
  @Length(5, 10, { message: "Name must be between 5 and 10 characters|" })
  FName: string;

  @IsNotEmpty({ message: "First name cannot be empty!" })
  @Length(5, 10, { message: "Name must be between 5 and 10 characters|" })
  LName: string;

  @IsEmail()
  @IsNotEmpty({ message: "Email must not be empty" })
  Email: string;

  Birthday: Date;

  @IsNotEmpty({ message: "Password cannot be empty!" })
  @Length(8, 16, { message: "Password must have between 8 to 16 characters!" })
  Password: string;

  MyClasses: ObjectId[];
}
