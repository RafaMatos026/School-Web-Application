import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  //Create User
  @Post('create')
  async createUser(@Body() CreateUserDto: CreateUserDto) {
    return await this.UserService.createUser(CreateUserDto);
  }

  //Get user by id
  @Get('getUser/:id')
  async getUser(@Param('id') _id: string) {
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
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.UserService.updateUser(_id, updateUserDto);
  }

  //Disable User
  @Put('disableUser/:id')
  async deleteUser(@Param('id') _id: string) {
    await this.UserService.disableUser(_id);
  }
}
