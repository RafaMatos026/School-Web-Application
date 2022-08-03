import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    createUser(CreateUserDto: CreateUserDto): Promise<import("./user.schema").User>;
    getUser(_id: string): Promise<import("./user.schema").User>;
    getUsers(): Promise<import("./user.schema").User[]>;
    updateUser(_id: string, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUser(_id: string): Promise<void>;
}
