import { IsNotEmpty, Length } from 'class-validator';
import { Class } from '../Aula/class.schema';

export class CreateWorkDto {
  @IsNotEmpty({ message: 'Class must have a name!' })
  @Length(6, 20, { message: 'Class name must be between 6 to 20 characters!' })
  WorkName: string;

  Description: string;

  @IsNotEmpty({ message: 'Work needs to have a due date!' })
  DueDate: Date;

  @IsNotEmpty({ message: 'Work must be associated to a class!' })
  classId: Class;

  @IsNotEmpty({message: "Work must hava a url associated with!"})
  fileUrl: string;
}
