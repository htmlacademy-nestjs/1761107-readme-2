import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { CRUDRepository } from '@readme/core';
import { Comment } from '@readme/shared-types';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentMemoryRepository implements CRUDRepository<CommentEntity, string, Comment> {

  private repository: { [key: string]: Comment } = {};

  public async findById(postId: string): Promise<Comment> {
    //by post ID
    //     const commentByPostId = Object.values(this.repository)
    //     .filter((commentItem) => commentItem.postId === postId);

    // if (commentByPostId.length === 0) {
    //     return null;
    // }

    // return commentByPostId;

    if (this.repository[postId]) {
      return { ...this.repository[postId] }
    }
    return null
  }

  public async create(item: CommentEntity): Promise<Comment> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return { ...entry };
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  update(_id: string, _item: CommentEntity): Promise<Comment> {
    throw new Error('Method not implemented.');
  }

}
