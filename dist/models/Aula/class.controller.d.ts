import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
import { ClassService } from './class.service';
export declare class ClassController {
    private readonly ClassService;
    constructor(ClassService: ClassService);
    createClass(ClassName: string, Subject: Subject, HeadTeacher: User, AssignedTeachers: User[], Status: boolean): Promise<import("./class.schema").Class>;
    getClasses(): Promise<import("./class.schema").Class[]>;
    getClass(classId: string): Promise<import("./class.schema").Class>;
    updateClass(classId: string): any;
    deleteClass(classId: string): Promise<void>;
}
