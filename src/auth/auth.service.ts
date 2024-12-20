import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(name: string): Promise<{ userId: string }> {
    let user = await this.userModel.findOne({ name });
    if (!user) {
      user = await this.userModel.create({ name });
    }
    return { userId: user._id.toString() };
  }
}
