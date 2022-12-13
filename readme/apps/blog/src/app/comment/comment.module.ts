import { Module } from '@nestjs/common';
import { CommentMemoryRepository } from './comment-memory.repository';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [CommentService, CommentMemoryRepository],
  exports: [CommentMemoryRepository],
})
export class CommentModule {}
