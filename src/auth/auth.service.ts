import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto';

import { UserService } from 'src/user/user.service';

@Injectable()
export default class AuthService {
  constructor(private userService: UserService) {}

  login() {}

  async signup(dto: CreateUserDto) {
    const user: CreateUserDto = {
      ...dto,
      userType: !dto.trainerId ? 'TRAINER' : 'USER',
      trainerId: dto.trainerId || '',
    };

    return this.userService.create(user);
  }
}
