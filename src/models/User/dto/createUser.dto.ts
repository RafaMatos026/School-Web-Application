import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {
  @Length(6, 16, { message: 'First name must be between 6 and 16 characters!' })
  FName: string;

  @Length(6, 16, { message: 'Last name must be between 6 and 16 characters!' })
  LName: string;

  @IsEmail({ message: 'Not a valid email!' })
  @Length(10, 40, {
    message: 'Email must be between 10 and 40 characters!',
  })
  Email: string;

  @IsDate({ message: 'Not a valid date!' })
  Birthday: Date;

  @IsNotEmpty({ message: 'User must have an account type!' })
  AccountType: ObjectId;

  @IsNotEmpty({ message: 'Password cannot be empty!' })
  @Length(8, 16, { message: 'Password must be between 8 and 16 characters!' })
  Password: string;

  @IsBoolean({ message: 'User account status must be of type boolean!' })
  Status: boolean;

  @IsBoolean({ message: 'Registered must be of boolean type!' })
  Registered: boolean;
}
