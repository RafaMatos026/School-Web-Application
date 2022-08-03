import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Summary } from './summary.schema';
import { CreateSummaryDto } from './dto/createSummary.dto';

@Injectable()
export class SummaryService {
  constructor(
    @InjectModel(Summary.name) private readonly summaryModel: Model<Summary>,
  ) {}

  //Create summary
  async createSummary(CreateSummaryDto: CreateSummaryDto): Promise<Summary> {
    const newSummary = new this.summaryModel({
      Date: CreateSummaryDto.Date,
      Description: CreateSummaryDto.Description,
      classId: CreateSummaryDto.classId,
    });
    await newSummary.save();
    return newSummary;
  }

  //Get all summarys
  async getSummarys() {
    const summarys = this.summaryModel.find({});
    if (summarys) {
      return summarys;
    } else {
      throw new NotFoundException('No summarys found!');
    }
  }

  //Get summary by _id
  async getSummary(_id: string) {
    const summary = await this.summaryModel.findById(_id);
    if (summary) {
      return summary;
    } else {
      throw new NotFoundException('Summary not found!');
    }
  }
}
