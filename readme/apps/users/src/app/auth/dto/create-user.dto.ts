import {ApiProperty} from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  email: string;

  @ApiProperty({
    description: 'User login',
    example: 'Keks',
  })
  login: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  password: string;
}
