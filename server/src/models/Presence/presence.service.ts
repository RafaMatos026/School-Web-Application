import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Presence } from './presence.schema';

@Injectable()
export class PresenceService {
  constructor(
    @InjectModel(Presence.name) private readonly presenceModel: Model<Presence>,
  ) {}

  //Create Subject
  async createPresence(
    Present: boolean,
    classId: string,
    userId: string,
  ): Promise<Presence> {
    const newPresence = new this.presenceModel({
      classId: classId,
      Present: Present,
      userId: userId,
    });
    const result = await newPresence.save();
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
