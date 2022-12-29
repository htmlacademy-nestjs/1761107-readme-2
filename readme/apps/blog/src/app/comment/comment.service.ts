import { Injectable } from '@nestjs/common';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import * as dayjs from 'dayjs';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository
  ) {}

  async createComment(dto: CreateCommentDto) {
    const { userId, postId, text } = dto;
    const newComment = {
      id: 1,
      createdAt: dayjs().toDate(),
      userId,
      postId,
      text,
    };

    const commentEntity = await new CommentEntity(newComment)

    return this.commentRepository
      .create(commentEntity);
  }

  async getCommentsByPostId(id: string) {
    return this.commentRepository.findById(Number(id));
  }

  async deleteComment(id: string) {
    return this.commentRepository.destroy(Number(id));
  }

}
