import { AuthenticationService } from './authentication/authentication.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthenticationService);
    login(req: any): Promise<{
        access_token: string;
    }>;
}
