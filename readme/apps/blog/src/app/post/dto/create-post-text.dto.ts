import { ApiProperty } from '@nestjs/swagger';

export class CreatePostTextDto {

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
    description: 'Post description, min 50, max 255',
    required: true,
    example: 'bla bla bla'
  })
  public previewPost: string;

  @ApiProperty({
    description: 'Text, min 100, max 1024',
    required: true,
    example: 'bla bla bla'
  })
  public textPost: string;

}
