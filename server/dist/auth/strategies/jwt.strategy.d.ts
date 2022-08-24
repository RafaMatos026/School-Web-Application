import { Strategy } from 'passport-jwt';
import { UserPayload } from '../models/UserPayload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UserPayload): Promise<{
        _id: string;
        FName: string;
        LName: string;
        AccountType: import("mongoose").Schema.Types.ObjectId;
    }>;
}
export {};
