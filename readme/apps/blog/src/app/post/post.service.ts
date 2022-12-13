import { Injectable } from '@nestjs/common';
import { PostType } from '@readme/shared-types';
import * as dayjs from 'dayjs';
import { CreatePostLinkDto } from './dto/create-post-link.dto';
import { CreatePostPhotoDto } from './dto/create-post-photo.dto';
import { CreatePostQuoteDto } from './dto/create-post-quote.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { PostMemoryRepository } from './post-memory.repository';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {

  constructor(
    private readonly postMemory: PostMemoryRepository
  ) { }

  private postEntity: PostEntity;

  private readonly defaultPost = {
    userId: '1234567890',
    type: PostType.Text,
    publishAt: dayjs().toDate(),
    createdAt: dayjs().toDate(),
    isRepost: false,
    primaryId: '1',
    primaryAuthor: '1',
    tags: [],
    titlePost: null,
    previewPost: null,
    textPost: null,
    quote: null,
    authorQuote: null,
    photoLink: null,
    videoLink: null,
    linkURL: null,
    linkDescription: null,
  }

  private fillVideoPost(dto: CreatePostVideoDto): PostEntity {
    const newPost = this.defaultPost;
    newPost.titlePost = dto.titlePost;
    newPost.videoLink = dto.videoLink;
    return new PostEntity(newPost);
  }

  private fillTextPost(dto: CreatePostTextDto): PostEntity {
    const newPost = this.defaultPost;
    newPost.titlePost = dto.titlePost;
    newPost.previewPost = dto.previewPost;
    newPost.textPost = dto.textPost;
    return new PostEntity(newPost);
  }

  private fillQuotePost(dto: CreatePostQuoteDto): PostEntity {
    const newPost = this.defaultPost;
    newPost.quote = dto.quote;
    newPost.authorQuote = dto.authorQuote;
    return new PostEntity(newPost);
  }

  private fillPhotoPost(dto: CreatePostPhotoDto): PostEntity {
    const newPost = this.defaultPost;
    newPost.photoLink = dto.photoLink;
    return new PostEntity(newPost);
  }

  private fillLinkPost(dto: CreatePostLinkDto): PostEntity {
    const newPost = this.defaultPost;
    newPost.linkDescription = dto.linkDescription;
    newPost.linkURL = dto.linkURL;
    return new PostEntity(newPost);
  }

//   async createPost(dto: CreatePostVideoDto | CreatePostTextDto | CreatePostQuoteDto | CreatePostPhotoDto | CreatePostLinkDto,
//     postType: PostType) {

  async createPost(dto, postType: PostType) {

    switch (postType) {
      case PostType.Video:
        this.postEntity = this.fillVideoPost(dto);
        break;
      case PostType.Text:
        this.postEntity = this.fillTextPost(dto);
        break;
      case PostType.Quote:
        this.postEntity = this.fillQuotePost(dto);
        break;
      case PostType.Photo:
        this.postEntity = this.fillPhotoPost(dto);
        break;
      case PostType.Link:
        this.postEntity = this.fillLinkPost(dto);
        break;
        default: throw new Error('Unknown PostType');
    }

    return await this.postMemory.create(this.postEntity);

  }

}
