import { IsNotEmpty, Length } from "class-validator";

export class UpdateUserDto {

  ProfilePicture: string;

  @IsNotEmpty({ message: "First name cannot be empty!" })
  FName: string;

  @IsNotEmpty({ message: "Last name cannot be empty!" })
  LName: string;

  @IsNotEmpty({ message: "Password cannot be empty!" })
  @Length(8, 16, { message: "Password must have between 8 to 16 characters!" })
  Password: string;

  Birthday: Date;
}
