import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Type } from '../Type/type.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('create')
  createUser(
    @Body('FName') FName: string,
    @Body('LName') LName: string,
    @Body('Email') Email: string,
    @Body('Password') Password: string,
    @Body('AccountType') AccountType: Type,
    @Body('Birthday') Birthday: Date,
  ) {
    return this.UserService.createUser(
      FName,
      LName,
      Email,
      Password,
      Birthday,
      AccountType,
    );
  }
}
