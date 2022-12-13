import { Injectable } from '@nestjs/common';
import { CommentMemoryRepository } from './comment-memory.repository';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentMemoryRepository
  ) {}

  async createComment(dto: CreateCommentDto) {
    const { userId, postId, text } = dto;
    const newComment = {
      _id: '1',
      createdAt: dayjs().toDate(),
      userId,
      postId,
      text,
    };

    const commentEntity = await new CommentEntity(newComment)

    return this.commentRepository
      .create(commentEntity);
  }

  async getComment(id: string) {
    return this.commentRepository.findById(id);
  }

  async deleteComment(id: string) {
    return this.commentRepository.destroy(id);
  }

}
