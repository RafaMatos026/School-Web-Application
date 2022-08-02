import { IsNotEmpty, Length } from 'class-validator';

export class UpdateUserDto {
  @Length(6, 16, { message: 'First name must be between 6 and 16 characters!' })
  FName: string;

  @Length(6, 16, { message: 'Last name must be between 6 and 16 characters!' })
  LName: string;

  @IsNotEmpty({ message: 'Password cannot be empty!' })
  @Length(8, 16, { message: 'Password must be between 8 and 16 characters!' })
  Password: string;
}
