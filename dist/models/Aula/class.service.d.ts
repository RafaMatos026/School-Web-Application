import { Model } from 'mongoose';
import { Class } from './class.schema';
import { User } from '../User/user.schema';
import { CreateClassDto } from './dto/createClass.dto';
export declare class ClassService {
    private readonly classModel;
    constructor(classModel: Model<Class>);
    createClass(CreateClassDto: CreateClassDto): Promise<Class>;
    getClasses(): Promise<Class[]>;
    getClass(_id: string): Promise<Class>;
    updateClass(_id: string, ClassName: string, HeadTeacher: User, AssignedTeachers: User[], Status: boolean): Promise<void>;
    deleteClass(_id: string): Promise<void>;
}
