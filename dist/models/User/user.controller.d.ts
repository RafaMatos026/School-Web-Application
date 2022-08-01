import { Type } from '../Type/type.schema';
import { UserService } from './user.service';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    createUser(FName: string, LName: string, Email: string, Password: string, AccountType: Type, Birthday: Date): Promise<import("./user.schema").User>;
}
