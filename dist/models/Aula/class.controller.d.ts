import { ClassService } from './class.service';
import { CreateClassDto } from './dto/createClass.dto';
export declare class ClassController {
    private readonly ClassService;
    constructor(ClassService: ClassService);
    createClass(createClassDto: CreateClassDto): Promise<import("./class.schema").Class>;
    getClasses(): Promise<import("./class.schema").Class[]>;
    getClass(classId: string): Promise<import("./class.schema").Class>;
    updateClass(classId: string): any;
    deleteClass(classId: string): Promise<void>;
}
