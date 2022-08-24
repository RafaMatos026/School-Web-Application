import { ObjectId } from 'mongoose';
export interface UserToken {
    user: {
        _id: string;
        FName: string;
        LName: string;
        AccountType: ObjectId;
    };
    access_token: string;
}
