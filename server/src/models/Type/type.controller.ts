import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Type } from './type.schema';
import { TypeService } from './type.service';

@Controller('types')
export class TypeController {
  constructor(private readonly TypeService: TypeService) {}

  //Create user type
  @Post('create')
  async createType(@Body('Description') Description: string) {
    return await this.TypeService.createType(Description);
  }

  //get all user types
  @Get('getTypes')
  async getTypes() {
    return await this.TypeService.getTypes();
  }

  //Get user type by ID
  @Get('getType/:id')
  async getType(@Param('id') typeId: string) {
    return await this.TypeService.getType(typeId);
  }
}
