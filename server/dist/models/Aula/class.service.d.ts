import { Model, ObjectId } from 'mongoose';
import { Class } from './class.schema';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';
export declare class ClassService {
    private readonly classModel;
    constructor(classModel: Model<Class>);
    createClass(CreateClassDto: CreateClassDto): Promise<Class>;
    getClasses(): Promise<Class[]>;
    getClass(_id: string): Promise<Class>;
    updateClass(_id: string, UpdateClassDto: UpdateClassDto): Promise<void>;
    deleteClass(_id: string): Promise<void>;
    assignTeachers(_id: string, teachers: ObjectId): Promise<void>;
    assignStudents(_id: string, students: ObjectId[]): Promise<void>;
}
