import { ObjectId } from 'mongoose';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/createClass.dto';
import { UpdateClassDto } from './dto/updateClass.dto';
export declare class ClassController {
    private readonly ClassService;
    constructor(ClassService: ClassService);
    createClass(createClassDto: CreateClassDto): Promise<import("./class.schema").Class>;
    getClasses(): Promise<import("./class.schema").Class[]>;
    getClass(classId: string): Promise<import("./class.schema").Class>;
    updateClass(_id: string, UpdateClassDto: UpdateClassDto): Promise<void>;
    deleteClass(classId: string): Promise<void>;
    assignTeachers(_id: string, teachers: ObjectId): Promise<void>;
    assignStudents(_id: string, students: ObjectId[]): Promise<void>;
}
