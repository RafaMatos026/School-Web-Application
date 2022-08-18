import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../User/user.module';
import { ClassController } from './class.controller';
import { Class, ClassSchema } from './class.schema';
import { ClassService } from './class.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Class.name, schema: ClassSchema }]),
    UserModule,
  ],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
