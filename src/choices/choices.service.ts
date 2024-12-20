import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Choice } from '../schemas/choice.schema';

@Injectable()
export class ChoicesService {
  constructor(@InjectModel(Choice.name) private choiceModel: Model<Choice>) {}

  async saveChoice(
    userId: string,
    category: string,
    choice: number,
    choiceName: string,
  ) {
    return await this.choiceModel.create({
      userId,
      category,
      choice,
      choiceName,
    });
  }

  async getChoice(userId: string, category: string): Promise<Choice | null> {
    return this.choiceModel.findOne({ userId, category }).exec();
  }

  async getAllVotes(): Promise<any[]> {
    return this.choiceModel.aggregate([
      {
        $group: {
          _id: '$choiceName',
          votes: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          choiceName: '$_id',
          votes: 1,
        },
      },
      {
        $sort: { votes: -1 },
      },
    ]);
  }

  async getVotesByCategory(category: string): Promise<any[]> {
    return this.choiceModel.aggregate([
      {
        $match: { category },
      },
      {
        $group: {
          _id: '$choiceName',
          votes: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          choiceName: '$_id',
          votes: 1,
        },
      },
      {
        $sort: { votes: -1 },
      },
    ]);
  }
}
