import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
import { ClassService } from './class.service';
export declare class ClassController {
    private readonly ClassService;
    constructor(ClassService: ClassService);
    createClass(ClassName: string, Subject: Subject, HeadTeacher: User, AssignedTeachers: User[], Status: boolean): Promise<import("./class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(): Promise<void>;
    getClass(classId: string): Promise<(import("./class.schema").Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
