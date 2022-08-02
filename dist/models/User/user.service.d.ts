import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(CreateUserDto: CreateUserDto): Promise<User>;
    getUser(_id: string): Promise<User>;
    getUsers(): Promise<User[]>;
    updateUser(_id: string, updateUserDto: UpdateUserDto): Promise<User>;
    disableUser(_id: string): Promise<void>;
}
