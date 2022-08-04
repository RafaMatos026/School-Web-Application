import { Subject } from 'src/models/Subject/subject.schema';
export declare class CreateUserDto {
    FName: string;
    LName: string;
    Email: string;
    Birthday: Date;
    AccountType: Subject;
    Password: string;
}
