import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Presence } from './presence.schema';
import { MarkPresenceDto } from './markPresence.dto';

@Injectable()
export class PresenceService {
  constructor(
    @InjectModel(Presence.name) private readonly presenceModel: Model<Presence>,
  ) {}

  //Add presence
  async markPresence(markPresenceDto: MarkPresenceDto): Promise<Presence> {
    const newPresence = new this.presenceModel({
      classId: markPresenceDto.classId,
      Present: markPresenceDto.Present,
      studentId: markPresenceDto.studentId,
    });
    await newPresence.save();
    return newPresence;
  }

  //Get Presences by class Id
  async getPresences(_id: string) {
    const presences = await this.presenceModel.findById(_id);
    if (presences) {
      return presences;
    } else {
      throw new NotFoundException('Presences not found for this class!');
    }
  }
}
