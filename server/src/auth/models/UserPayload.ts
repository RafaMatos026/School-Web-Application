import { ObjectId } from 'mongoose';

export interface UserPayload {
  _id: string;
  FName: string;
  LName: string;
  AccountType: ObjectId;
}
