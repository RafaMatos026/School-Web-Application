import { Model } from 'mongoose';
import { Class } from './class.schema';
import { Subject } from '../Subject/subject.schema';
import { User } from '../User/user.schema';
export declare class ClassService {
    private readonly classModel;
    constructor(classModel: Model<Class>);
    createClass(ClassName: string, Subject: Subject, HeadTeacher: User, AssignedTeacher: User[], Status: boolean): Promise<Class>;
    getClasses(): Promise<Class[]>;
    getClass(_id: string): Promise<Class>;
    updateClass(_id: string, ClassName: string, HeadTeacher: User, AssignedTeachers: User[], Status: boolean): Promise<void>;
    deleteClass(_id: string): Promise<void>;
}
