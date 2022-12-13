import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class UserRdo {

  @ApiProperty({
    description: 'The uniq user ID',
    example: '13'
  })
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User login',
    example: 'Keks'
  })
  @Expose()
  public login: string;

}
