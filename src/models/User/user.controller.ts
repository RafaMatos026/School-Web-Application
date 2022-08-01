import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { Type } from '../Type/type.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  //Create User
  @Post('create')
  async createUser(
    @Body('FName') FName: string,
    @Body('LName') LName: string,
    @Body('Email') Email: string,
    @Body('Password') Password: string,
    @Body('AccountType') AccountType: Type,
    @Body('Birthday') Birthday: Date,
  ) {
    return await this.UserService.createUser(
      FName,
      LName,
      Email,
      Password,
      Birthday,
      AccountType,
    );
  }

  //Get user by id
  @Get('getUser/:id')
  async getUser(@Body('id') _id: string) {
    return await this.UserService.getUser(_id);
  }

  //Fetch all users
  @Get('getUsers')
  async getUsers() {
    return await this.UserService.getUsers();
  }

  //Update User
  @Put('updateUser/:id')
  async updateUser(
    @Param('id') _id: string,
    @Body('FName') FName: string,
    @Body('LName') LName: string,
    @Body('Password') Password: string,
  ) {
    await this.UserService.updateUser(_id, FName, LName, Password);
  }

  //Disable User
  @Put('deleteUser/:id')
  async deleteUser(@Param('id') _id: string) {
    await this.UserService.deleteUser(_id);
  }
}
