import { Request } from 'express';
import { User } from 'src/models/User/user.schema';
export interface AuthRequest extends Request {
    user: User;
}
