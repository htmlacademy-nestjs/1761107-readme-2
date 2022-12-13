import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { CreatePostLinkDto } from './dto/create-post-link.dto';
import { CreatePostPhotoDto } from './dto/create-post-photo.dto';
import { CreatePostQuoteDto } from './dto/create-post-quote.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';
import { PostRdo } from './rdo/post.rdo';


@ApiTags('post')
@Controller('post')
export class PostController {

  constructor(
    private readonly postService: PostService
  ) {}

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

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The post has been deleted.'
  })
  async delete (@Param('id') id: string){
    return fillObject(PostRdo, await this.postService.deletePost(id));
  }

  @Get(':id')
  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.OK,
    description: 'Post found'
  })
  async show(@Param('id') id: string) {
    const existPost = await this.postService.getPost(id);
    return fillObject(PostRdo, existPost);
  }

  @Patch(':id')
  @ApiResponse({
    type: PostRdo,
    status: HttpStatus.CREATED,
    description: 'Post'
  })
  async updatePost (@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return fillObject(PostRdo, await this.postService.updatePost(id, dto));
  }

  @Get()
  @ApiResponse({
    type: [PostRdo],
    status: HttpStatus.OK,
    description: 'Post'
  })
  async getPosts (){
     return fillObject(PostRdo, await this.postService.getPosts());
  }

}
