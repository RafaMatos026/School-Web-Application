import { ObjectId } from 'mongoose';
export interface UserDetails {
    _id: string;
    FName: string;
    Email: string;
    AccountType: ObjectId;
    Status: boolean;
    Registered: boolean;
}
