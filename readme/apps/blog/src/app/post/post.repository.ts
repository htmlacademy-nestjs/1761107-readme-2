import { Injectable, Logger } from '@nestjs/common';
import { CRUDRepository } from '@readme/core';
import { PostEntity } from './post.entity';
import { Post as PrismaPost } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostRepository implements CRUDRepository<PostEntity, number, PrismaPost> {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  public async create(item: PostEntity): Promise<PrismaPost> {
    Logger.log(item);
    const entityData = { ...item.toObject(), type: item.type.toString() };

    Logger.log(entityData);
    const post = await this.prisma.post.create({
      data: {
        ...entityData as PrismaPost
      }
    });

    return post;

  }

  public async update(id: number, item: PostEntity): Promise<PrismaPost> {
    return this.prisma.post.update({
      where: {
        id
      },
      data: { ...item.toObject(), type: item.type.toString(), id}
    });
  }

  public async findById(id: number) {

    return this.prisma.post.findUnique({
      where: {
        id
      },
      include: {
        comments: true,
      }
    });
  }

  public async destroy(id: number): Promise<void> {

    await this.prisma.post.delete({
      where: {
        id,
      },
      include: {
        comments: true,
      }
    });

  }

  public async getPosts(): Promise<PrismaPost[]> {

    return this.prisma.post.findMany({
      include: {
        comments: true,
      }
    });
  }

}


