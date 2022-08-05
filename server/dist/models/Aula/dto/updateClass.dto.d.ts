import { Subject } from 'src/models/Subject/subject.schema';
import { User } from 'src/models/User/user.schema';
export declare class UpdateClassDto {
    ClassName: string;
    HeadTeacher: User;
    Subject: Subject;
    AssignedTeachers: User[];
    AssignedStudents: User[];
}