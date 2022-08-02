import { Subject } from 'src/models/Subject/subject.schema';
import { User } from 'src/models/User/user.schema';

export class CreateClassDto {
  ClassName: string;
  Subject: Subject;
  HeadTeacher: User;
  AssignedTeachers: User[];
  AssignedStudents: User[];
  Status: boolean;
}
