import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PresenceController } from './presence.controller';
import { Presence, PresenceSchema } from './presence.schema';
import { PresenceService } from './presence.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Presence.name, schema: PresenceSchema },
    ]),
  ],
  controllers: [PresenceController],
  providers: [PresenceService],
})
export class PresenceModule {}
