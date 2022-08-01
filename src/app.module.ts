import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './models/Aula/class.module';
import { SubjectModule } from './models/Subject/subject.module';
import { TypeModule } from './models/Type/type.module';
import { UserModule } from './models/User/user.module';

@Module({
  imports: [
    SubjectModule,
    TypeModule,
    UserModule,
    ClassModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongo:mongo@schoolwebapplication.oocykko.mongodb.net/Schooldb?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
