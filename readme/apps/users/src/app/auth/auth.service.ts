import { Injectable } from '@nestjs/common';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { BlogUserRepository } from '../blog-user/blog-user.repository';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './auth.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {}

  async register(dto: CreateUserDto) {
    const {email, login, password, } = dto;
    const blogUser = {
      _id: '',
      email,
      login,
      avatar: '',
      passwordHash: ''
    };

    const existUser = await this.blogUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new Error(AUTH_USER_EXISTS);
    }

    const userEntity = await new BlogUserEntity(blogUser)
      .setPassword(password)

    return this.blogUserRepository
      .create(userEntity);
  }

  async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }

    const blogUserEntity = new BlogUserEntity(existUser);
    if (! await blogUserEntity.comparePassword(password)) {
      throw new Error(AUTH_USER_PASSWORD_WRONG);
    }

    return blogUserEntity.toObject();
  }

  async getUser(id: string) {

    const existUser = await this.blogUserRepository.findById(id);

    if (!existUser) {
      throw new Error(AUTH_USER_NOT_FOUND);
    }

    return existUser;
  }
}
