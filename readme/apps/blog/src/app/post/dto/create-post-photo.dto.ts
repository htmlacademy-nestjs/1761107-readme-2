import { ApiProperty } from '@nestjs/swagger';

export class CreatePostPhotoDto {

  @ApiProperty({
    description: 'userId',
    example: '1234567890'
  })
  public userId: string;

  @ApiProperty({
    description: 'tags',
    example: '[#tags]'
  })
  public tags: string[];

  @ApiProperty({
    description: 'Photo, max 1 Mb, formats: jpg, png',
    required: true,
    example: '/photo1.jpg'
  })
  public photoLink: string;

}
