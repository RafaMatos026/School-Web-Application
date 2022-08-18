import { Strategy } from 'passport-local';
import { AuthenticationService } from '../authentication.service';
import { User } from 'src/models/User/user.schema';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthenticationService);
    validate(Email: string, Password: string): Promise<User>;
}
export {};
