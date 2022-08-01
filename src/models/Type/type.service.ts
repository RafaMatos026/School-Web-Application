import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from './type.schema';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type.name) private readonly typeModel: Model<Type>,
  ) {}

  //Create user type
  async createType(Description: string) {
    const newType = new this.typeModel({
      Description: Description,
    });
    const result = await newType.save();
    return result;
  }

  //Get all user types
  async getTypes(): Promise<Type[]> {
    const types = await this.typeModel.find({});
    if (types) {
      return types;
    } else {
      throw new NotFoundException('No user types found!');
    }
  }

  //get user type by id
  async getType(_id: string): Promise<Type> {
    const type = await this.typeModel.findById(_id);
    if (!type) {
      throw new NotFoundException('User account type not found!');
    } else {
      return type;
    }
  }
}
