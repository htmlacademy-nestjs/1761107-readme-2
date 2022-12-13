import { ApiProperty } from '@nestjs/swagger';

export class CreatePostLinkDto {

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
    example: 'https://link.com'
  })
  public linkURL: string;

  @ApiProperty({
    description: 'Link description, max 300',
    example: 'bla bla bla'
  })
  public linkDescription: string;

}
