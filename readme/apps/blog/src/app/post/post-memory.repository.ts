import { Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';
import { CRUDRepository } from '@readme/core';
import { PostEntity } from './post.entity';
import { Post } from '@readme/shared-types';

@Injectable()
export class PostMemoryRepository implements CRUDRepository<PostEntity, string, Post> {

  public async create(item: PostEntity): Promise<Post> {
  Logger.log(item);
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return { ...entry };

  }

  public async update(id: string, item: PostEntity): Promise<Post> {
    this.repository[id] = {...item.toObject()};
    return this.findById(id);
}

  private repository: { [key: string]: Post } = {};

  public async findById(postId: string): Promise<Post> {

    if (this.repository[postId]) {
      return { ...this.repository[postId] }
    }
    return null
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async getPosts(): Promise<Post[]> {
    return Object.values(this.repository);
 }

}


