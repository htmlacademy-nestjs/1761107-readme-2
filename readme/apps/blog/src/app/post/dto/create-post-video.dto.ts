import { ApiProperty } from '@nestjs/swagger';

export class CreatePostVideoDto {

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
    description: 'Title, min 20, max 50',
    required: true,
    example: 'bla bla bla'
  })
  public titlePost: string;

  @ApiProperty({
    description: 'Link Video.',
    required: true,
    example: 'https://www.video.com'
  })
  public videoLink: string;

}
