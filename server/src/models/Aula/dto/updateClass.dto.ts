import { IsNotEmpty, Length } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UpdateClassDto {
  @IsNotEmpty({ message: 'Class must have a name!' })
  @Length(6, 20, { message: 'Class name must be between 6 to 20 characters!' })
  ClassName: string;

  @IsNotEmpty({ message: 'Class must have a headteacher!' })
  HeadTeacher: ObjectId;

  @IsNotEmpty({ message: 'Class must have a subject!' })
  Subject: ObjectId;

  Status: boolean;
}
