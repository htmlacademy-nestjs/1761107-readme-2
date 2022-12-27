import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {

  @ApiProperty({
    description: 'userId',
    example: '1234567890'
  })
  public userId: string;

  @ApiProperty({
    description: 'postId',
    example: 1234567890
  })
  public postId: number;

  @ApiProperty({
    description: 'text of comment, min 10, max  300',
    example: 'bla bla bla'
  })
  text: string;

}
