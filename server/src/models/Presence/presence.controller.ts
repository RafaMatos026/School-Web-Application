import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { Presence } from './presence.schema';
import { PresenceService } from './presence.service';

@Controller('presences')
export class PresenceController {
  constructor(private readonly PresenceService: PresenceService) {}

  @Post('create')
  async createPresence(
    @Body('Present') Present: boolean,
    @Body('classId') classId: string,
    @Body('userId') userId: string,
  ) {
    const presence = await this.PresenceService.createPresence(
      Present,
      classId,
      userId,
    );
    return presence;
  }

  @Get('getPresences/:id')
  async getPresences(@Param('id') classId: string) {
    const presences = await this.PresenceService.getPresences(classId);
    return presences;
  }
}
