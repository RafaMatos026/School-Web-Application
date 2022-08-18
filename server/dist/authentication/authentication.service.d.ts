import { UserService } from 'src/models/User/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/User/user.schema';
export declare class AuthenticationService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(Email: string, Password: string): Promise<User | null>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
