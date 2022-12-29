import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { fillObject } from '@readme/core';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRdo } from './rdo/comment.rdo';

@ApiTags('comment')
@Controller('comment')
export class CommentController {

  constructor(
    private readonly commentService: CommentService
  ) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created.'
  })
  async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.createComment(dto);
    return fillObject(CommentRdo, newComment);
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The comment has been deleted.'
  })
  async delete (@Param('id') id: string){
    return fillObject(CommentRdo, await this.commentService.deleteComment(id));
  }

  @Get(':id')
  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'Comment found'
  })
  async show(@Param('id') id: string) {
    const existComment = await this.commentService.getCommentsByPostId(id);
    return fillObject(CommentRdo, existComment);
  }
}
