import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { PresenceService } from './presence.service';
import { MarkPresenceDto } from './markPresence.dto';

@Controller('presences')
export class PresenceController {
  constructor(private readonly PresenceService: PresenceService) {}

  @Post('create')
  async createPresence(@Body() markPresenceDto: MarkPresenceDto) {
    const presence = await this.PresenceService.markPresence(markPresenceDto);
    return presence;
  }

  @Get('getPresences/:id')
  async getPresences(@Param('id') classId: string) {
    const presences = await this.PresenceService.getPresences(classId);
    return presences;
  }
}
