import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class CommentRdo {

  @ApiProperty()
  @Expose()
  public _id: string;

  @ApiProperty()
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    description: 'text of comment, min 10, max  300',
    example: 'bla bla bla'
  })
  @Expose()
  public text: string;

  @ApiProperty()
  @Expose()
  public userId: string;

  @Expose()
  public postId: string;

}
