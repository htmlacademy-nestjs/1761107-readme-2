import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@readme/core';
import { Comment } from '@readme/shared-types';
import { CommentEntity } from './comment.entity';
import { PrismaService } from '../prisma/prisma.service';
import { Comment as PrismaComment } from '@prisma/client';

@Injectable()
export class CommentRepository implements CRUDRepository<CommentEntity, number, Comment | PrismaComment| PrismaComment[]> {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  public async findById(postId: number): Promise<PrismaComment[]> {

    const comments = this.prisma.comment.findMany({
      where: {
        postId
      },
      select: {
        id: true,
        text: true,
        postId: true,
        userId: true,
        createdAt: true
      }
    });

    return comments;
  }

  public async create(item: CommentEntity): Promise<PrismaComment> {
    const entry = item.toObject();

    return this.prisma.comment.create(
      {
        data: {...entry, id: 123},
        include: {
          post: {
            select: {
              id: true,
            }
          },
        }
      }
    );

  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        id,
      }
    });
  }

  update(_id: number, _item: CommentEntity): Promise<Comment> {
    throw new Error('Method not implemented.');
  }

}
