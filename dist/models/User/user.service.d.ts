import { Type } from '../Type/type.schema';
import { User } from './user.schema';
import { Model } from 'mongoose';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(FName: string, LName: string, Email: string, Password: string, Birthday: Date, Type: Type): Promise<User>;
}
