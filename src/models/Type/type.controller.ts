import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Type } from './type.schema';
import { TypeService } from './type.service';

@Controller('types')
export class TypeController {
  constructor(private readonly TypeService: TypeService) {}

  @Post('create')
  createType(@Body('Description') Description: string) {
    return this.TypeService.createType(Description);
  }

  @Get('getTypes')
  getTypes() {
    return this.TypeService.getTypes();
  }
}
