import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from './type.schema';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type.name) private readonly typeModel: Model<Type>,
  ) {}

  async createType(Description: string) {
    const newType = new this.typeModel({
      Description: Description,
    });
    const result = await newType.save();
    return result;
  }

  async getTypes() {
    const types = this.typeModel.find({});
    if (types) {
      return types;
    } else {
      throw new NotFoundException('No user types found!');
    }
  }
}
