import { Body, Controller, Post } from '@nestjs/common';
import AuthService from './auth.service';

import { LoginUserDto, CreateUserDto } from 'src/user/dto';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() loginDTO: LoginUserDto) {
    console.log(loginDTO);
    return this.authService.login();
  }

  @Post('signup')
  signup(@Body() signupDTO: CreateUserDto) {
    return this.authService.signup(signupDTO);
  }
}
