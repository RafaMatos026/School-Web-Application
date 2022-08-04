import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  //Create user
  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({
      FName: CreateUserDto.FName,
      LName: CreateUserDto.LName,
      Email: CreateUserDto.Email,
      Password: CreateUserDto.Password,
      Birthday: CreateUserDto.Birthday,
      AccountType: CreateUserDto.AccountType,
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
  async updateUser(_id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(
      { _id: _id },
      {
        FName: updateUserDto.FName,
        LName: updateUserDto.LName,
        Password: updateUserDto.Password,
      },
    );
    return user;
  }

  //Disable user
  async disableUser(_id: string) {
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
