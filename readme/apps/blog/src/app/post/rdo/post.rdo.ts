import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';
import { PostType } from '@readme/shared-types';

export class PostRdo {

  @ApiProperty()
  @Expose()
  public _id: string;

  @ApiProperty()
  @Expose()
  public userId: string;

  @ApiProperty()
  @Expose()
  public type: PostType;

  @ApiProperty()
  @Expose()
  public publishAt: Date;

  @ApiProperty()
  @Expose()
  public createdAt: Date;

  @ApiProperty()
  @Expose()
  public isRepost: boolean;

  @ApiProperty()
  @Expose()
  public primaryId: string;

  @ApiProperty()
  @Expose()
  public primaryAuthor: string;

  @ApiProperty()
  @Expose()
  public tags: string[];

  @ApiProperty()
  @Expose()
  public titlePost: string;

  @ApiProperty()
  @Expose()
  public previewPost: string;

  @ApiProperty()
  @Expose()
  public textPost: string;

  @ApiProperty()
  @Expose()
  public quote: string;

  @ApiProperty()
  @Expose()
  public authorQuote: string;

  @ApiProperty()
  @Expose()
  public photoLink: string;

  @ApiProperty()
  @Expose()
  public videoLink: string;

  @ApiProperty()
  @Expose()
  public linkURL: string;

  @ApiProperty()
  @Expose()
  public linkDescription: string;



  @ApiProperty({
    description: 'text of comment, min 10, max  300',
    example: 'bla bla bla'
  })
  @Expose()
  public text: string;

}
