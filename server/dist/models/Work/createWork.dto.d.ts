import { Class } from '../Aula/class.schema';
export declare class CreateWorkDto {
    WorkName: string;
    Description: string;
    DueDate: Date;
    classId: Class;
    AddedDate: Date;
    fileUrl: string;
}
