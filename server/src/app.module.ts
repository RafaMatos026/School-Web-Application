import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './models/Aula/class.module';
import { PresenceModule } from './models/Presence/presence.module';
import { SubjectModule } from './models/Subject/subject.module';
import { SummaryModule } from './models/Summary/summary.module';
import { TypeModule } from './models/Type/type.module';
import { UserModule } from './models/User/user.module';
import { WorkModule } from './models/Work/work.module';

@Module({
  imports: [
    SubjectModule,
    TypeModule,
    UserModule,
    ClassModule,
    SummaryModule,
    PresenceModule,
    WorkModule,
    MongooseModule.forRoot(
      'mongodb+srv://mongo:mongo@schoolwebapplication.oocykko.mongodb.net/Schooldb?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
