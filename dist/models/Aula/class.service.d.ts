import { Model } from 'mongoose';
import { Class, ClassDocument } from './class.schema';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
export declare class ClassService {
    private classModel;
    constructor(classModel: Model<ClassDocument>);
    createClass(ClassName: string, Subject: Subject, HeadTeacher: User, AssignedTeacher: User[], Status: boolean): Promise<Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getClasses(): Promise<void>;
    getClass(classId: string): Promise<(Class & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
