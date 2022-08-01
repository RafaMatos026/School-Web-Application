import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeController } from './type.controller';
import { Type, TypeSchema } from './type.schema';
import { TypeService } from './type.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }]),
  ],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
