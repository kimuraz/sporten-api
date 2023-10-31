import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces';
import { USER_MODEL } from 'src/utils/constants';
import { CreateUserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(@Inject(USER_MODEL) private userModel: Model<User>) {}

  async create(user: CreateUserDto): Promise<User> {
    const hashedPassword = await argon.hash(user.password);
    const createdUser = new this.userModel({
      ...user,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: null,
    });

    return createdUser.save();
  }

  async findByTrainerId(trainerId: string): Promise<User[]> {
    return this.userModel.find({ trainerId }).exec();
  }
}
