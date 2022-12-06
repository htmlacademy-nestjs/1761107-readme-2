import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Post('register')
  // @HttpCode(HttpStatus.CREATED)
  async create() {
    return {'title' : 'hello'}
  }

  // @Post('login')
  // async login() {

  // }
}
