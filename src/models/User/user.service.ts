import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from '../Type/type.schema';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  //Create user
  async createUser(
    FName: string,
    LName: string,
    Email: string,
    Password: string,
    Birthday: Date,
    AccountType: Type,
  ): Promise<User> {
    const newUser = new this.userModel({
      FName: FName,
      LName: LName,
      Email: Email,
      Password: Password,
      Birthday: Birthday,
      AccountType: AccountType,
    });
    const result = await newUser.save();
    //console.log(result);
    return result;
  }

  //Get user by id
  async getUser(_id: string): Promise<User> {
    const user = this.userModel.findById(_id);
    if (user) {
      return user;
    } else {
      throw new NotFoundException('User not found!');
    }
  }

  //Get all users
  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find({});
    if (users) {
      return users;
    } else {
      throw new NotFoundException('No users found!');
    }
  }

  //Update user
  async updateUser(
    _id: string,
    FName: string,
    LName: string,
    Password: string,
  ) {
    const user = await this.userModel.findByIdAndUpdate(
      { _id: _id },
      {
        FName: FName,
        LName: LName,
        Password: Password,
      },
    );
  }

  //Delete user
  async deleteUser(_id: string) {
    await this.userModel.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        Status: false,
      },
    );
    return;
  }
}
