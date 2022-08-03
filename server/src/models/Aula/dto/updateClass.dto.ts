import { Subject } from 'src/models/Subject/subject.schema';
import { User } from 'src/models/User/user.schema';
import { IsNotEmpty, Length } from 'class-validator';

export class UpdateClassDto {
  @IsNotEmpty({ message: 'Class must have a name!' })
  @Length(6, 20, { message: 'Class name must be between 6 to 20 characters!' })
  ClassName: string;

  @IsNotEmpty({ message: 'Class must have a headteacher!' })
  HeadTeacher: User;

  @IsNotEmpty({ message: 'Class must have a subject!' })
  Subject: Subject;
  AssignedTeachers: User[];
  AssignedStudents: User[];
}
