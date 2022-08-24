import { ObjectId } from 'mongoose';
export declare class CreateUserDto {
    FName: string;
    LName: string;
    Email: string;
    Birthday?: Date;
    AccountType: ObjectId;
    Password?: string;
}
