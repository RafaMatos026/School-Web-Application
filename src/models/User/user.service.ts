import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from '../Type/type.schema';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(
    FName: string,
    LName: string,
    Email: string,
    Password: string,
    Birthday: Date,
    Type: Type,
  ): Promise<User> {
    const newUser = new this.userModel({
      FName: FName,
      LName: LName,
      Email: Email,
      Password: Password,
      Birthday: Birthday,
      AccountType: Type,
    });
    const result = await newUser.save();
    console.log(result);
    return result;
  }
}
