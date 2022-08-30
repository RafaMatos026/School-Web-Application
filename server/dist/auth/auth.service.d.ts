import { UserService } from 'src/models/User/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { UserPayload } from './models/UserPayload';
export declare class AuthService {
    private userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(Email: string): Promise<UserToken>;
    validateToken(token: string): Promise<UserPayload>;
    validateUser(email: string, pass: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        FName: string;
        LName: string;
        AccountType: import("mongoose").Schema.Types.ObjectId;
        Status: boolean;
        Registered: boolean;
        Password: string;
    }>;
}
