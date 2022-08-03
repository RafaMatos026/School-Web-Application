import { IsNotEmpty, Length } from 'class-validator';
import { Subject } from 'src/models/Subject/subject.schema';
import { User } from 'src/models/User/user.schema';

export class CreateClassDto {
  @IsNotEmpty({ message: 'Class must have a name!' })
  @Length(6, 20, { message: 'Class name must be between 6 to 20 characters!' })
  ClassName: string;

  @IsNotEmpty({ message: 'Class must have a subject!' })
  Subject: Subject;

  @IsNotEmpty({ message: 'Class must have a headteacher!' })
  HeadTeacher: User;

  AssignedTeachers: User[];
  AssignedStudents: User[];

  Status: boolean;
}
