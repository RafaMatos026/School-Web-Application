import { UserService } from 'src/models/User/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    validateToken(token: string): Promise<import("./models/UserPayload").UserPayload>;
    login(Email: string, Password: string): Promise<import("./models/UserToken").UserToken>;
}
