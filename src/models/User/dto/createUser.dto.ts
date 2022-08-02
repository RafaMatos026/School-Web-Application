import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {
  FName: string;
  LName: string;
  Email: string;
  Birthday: Date;
  AccountType: ObjectId;
  Password: string;
}
