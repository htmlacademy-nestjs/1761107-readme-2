import { ApiProperty } from '@nestjs/swagger';

export class CreatePostQuoteDto {

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
    description: 'Quote, min 20, max 300',
    required: true,
    example: 'bla bla bla'
  })
  public quote: string;

  @ApiProperty({
    description: 'Author quote, min 3, max 50',
    required: true,
    example: 'Author'
  })
  public authorQuote: string;

}
