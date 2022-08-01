import { Type } from '../Type/type.schema';
import { User } from './user.schema';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(FName: string, LName: string, Email: string, Password: string, Birthday: Date, AccountType: Type): Promise<User>;
    getUser(_id: string): Promise<User>;
    getUsers(): Promise<User[]>;
    updateUser(_id: string, FName: string, LName: string, Password: string): Promise<void>;
    deleteUser(_id: string): Promise<void>;
}
