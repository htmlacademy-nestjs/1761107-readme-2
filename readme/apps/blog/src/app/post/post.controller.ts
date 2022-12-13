import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { CreatePostLinkDto } from './dto/create-post-link.dto';
import { CreatePostPhotoDto } from './dto/create-post-photo.dto';
import { CreatePostQuoteDto } from './dto/create-post-quote.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { PostService } from './post.service';
import { PostRdo } from './rdo/post.rdo';


@ApiTags('post')
@Controller('post')
export class PostController {

  constructor(
    private readonly postService: PostService
  ) {}

  // create, delete, edit, get, copy
  //get posts all, by user owner

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new post has been successfully created.'
  })
  async create(@Body() dto: CreatePostVideoDto | CreatePostTextDto | CreatePostQuoteDto | CreatePostPhotoDto | CreatePostLinkDto,
    @Query() {postType}) {
    const newComment = await this.postService.createPost(dto, postType);
    return fillObject(PostRdo, newComment);
  }

  // @Delete(':id')
  // @ApiResponse({
  //   status: HttpStatus.OK,
  //   description: 'The comment has been deleted.'
  // })
  // async delete (@Param('id') id: string){
  //   return fillObject(CommentRdo, await this.commentService.deleteComment(id));
  // }

  // @Get(':id')
  // @ApiResponse({
  //   type: CommentRdo,
  //   status: HttpStatus.OK,
  //   description: 'Comment found'
  // })
  // async show(@Param('id') id: string) {
  //   const existComment = await this.commentService.getComment(id);
  //   return fillObject(CommentRdo, existComment);
  // }

}
