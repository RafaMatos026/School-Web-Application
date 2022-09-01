import { IsNotEmpty, Length } from "class-validator";

export class UpdateUserDto {
  ProfilePicture: string;

  @IsNotEmpty({ message: "First name cannot be empty!" })
  FName: string;

  @IsNotEmpty({ message: "Last name cannot be empty!" })
  LName: string;

  Birthday: Date;
}
