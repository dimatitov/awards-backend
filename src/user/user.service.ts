import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getName(userId: string): Promise<{ name: string }> {
    const user = await this.userModel.findOne({ _id: userId });
    return { name: user.name };
  }
}
