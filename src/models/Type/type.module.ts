import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Type, TypeSchema } from './type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Type.name, schema: TypeSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class TypeModule {}
