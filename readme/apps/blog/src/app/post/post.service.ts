import { Injectable, Logger } from '@nestjs/common';
import { PostType } from '@readme/shared-types';
import * as dayjs from 'dayjs';
import { number } from 'joi';
import { CreatePostLinkDto } from './dto/create-post-link.dto';
import { CreatePostPhotoDto } from './dto/create-post-photo.dto';
import { CreatePostQuoteDto } from './dto/create-post-quote.dto';
import { CreatePostTextDto } from './dto/create-post-text.dto';
import { CreatePostVideoDto } from './dto/create-post-video.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {

  constructor(
    private readonly postRepository: PostRepository
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

  private fillVideoPost(dto: CreatePostVideoDto, postType: PostType): PostEntity {
    const newPost = this.defaultPost;
    newPost.type = postType;
    newPost.titlePost = dto.titlePost;
    newPost.videoLink = dto.videoLink;
    return new PostEntity(newPost);
  }

  private fillTextPost(dto: CreatePostTextDto, postType: PostType): PostEntity {
    const newPost = this.defaultPost;
    newPost.type = postType;
    newPost.titlePost = dto.titlePost;
    newPost.previewPost = dto.previewPost;
    newPost.textPost = dto.textPost;
    return new PostEntity(newPost);
  }

  private fillQuotePost(dto: CreatePostQuoteDto, postType: PostType): PostEntity {
    const newPost = this.defaultPost;
    newPost.type = postType;
    newPost.quote = dto.quote;
    newPost.authorQuote = dto.authorQuote;
    return new PostEntity(newPost);
  }

  private fillPhotoPost(dto: CreatePostPhotoDto, postType: PostType): PostEntity {
    const newPost = this.defaultPost;
    newPost.type = postType;
    newPost.photoLink = dto.photoLink;
    return new PostEntity(newPost);
  }

  private fillLinkPost(dto: CreatePostLinkDto, postType: PostType): PostEntity {
    const newPost = this.defaultPost;
    newPost.type = postType;
    newPost.linkDescription = dto.linkDescription;
    newPost.linkURL = dto.linkURL;
    return new PostEntity(newPost);
  }

  // async createPost(dto: CreatePostVideoDto | CreatePostTextDto | CreatePostQuoteDto | CreatePostPhotoDto | CreatePostLinkDto,
  //   postType: PostType) {

  async createPost(dto, postType: PostType) {

    switch (postType) {
      case PostType.Video:
        this.postEntity = this.fillVideoPost(dto, postType);
        break;
      case PostType.Text:
        this.postEntity = this.fillTextPost(dto, postType);
        break;
      case PostType.Quote:
        this.postEntity = this.fillQuotePost(dto, postType);
        break;
      case PostType.Photo:
        this.postEntity = this.fillPhotoPost(dto, postType);
        break;
      case PostType.Link:
        this.postEntity = this.fillLinkPost(dto, postType);
        break;
      default: throw new Error('Unknown PostType');
    }

    // if (dto instanceof CreatePostVideoDto) {
    //   this.postEntity = this.fillVideoPost(dto, postType);
    // }
    // if (dto instanceof CreatePostTextDto) {
    //   this.postEntity = this.fillTextPost(dto, postType);
    // }
    // if (dto instanceof CreatePostQuoteDto) {
    //   this.postEntity = this.fillQuotePost(dto, postType);
    // }
    // if (dto instanceof CreatePostPhotoDto) {
    //   this.postEntity = this.fillPhotoPost(dto, postType);
    // }
    // if (dto instanceof CreatePostLinkDto) {
    //   this.postEntity = this.fillLinkPost(dto, postType);
    // }

    Logger.log(this.postEntity);
    return await this.postRepository.create(this.postEntity);

  }

  async getPost(id: string) {
    return this.postRepository.findById(Number(id));
  }

  async deletePost(id: string) {
    return this.postRepository.destroy(Number(id));
  }

  async updatePost(id: string, dto: UpdatePostDto) {
    const idPost = Number(id);
    const existPost = await this.postRepository.findById(idPost);
    const updatedPost = Object.assign(existPost, dto);
    if (!existPost) {
      throw new Error('Post not found');
    }

    const type = updatedPost.type as keyof typeof PostType;
    const post = new PostEntity({ ...updatedPost, type: PostType[type] });
    return this.postRepository.update(idPost, post);
  }

  async getPosts() {
    return this.postRepository.getPosts();
  }

}
