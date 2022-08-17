import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty({ message: 'First name cannot be empty!' })
  @Length(4, 10, { message: 'Name must be between 5 and 10 characters!' })
  FName: string;

  @IsNotEmpty({ message: 'First name cannot be empty!' })
  @Length(4, 10, { message: 'Name must be between 5 and 10 characters!' })
  LName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email must not be empty' })
  Email: string;
}
