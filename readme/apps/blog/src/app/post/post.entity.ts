import { Post, PostType } from '@readme/shared-types';

export class PostEntity implements Post {

  _id?: string;
  userId: string;
  type: PostType;
  publishAt?: Date;
  createdAt?: Date;
  isRepost: boolean;
  primaryId: string;
  primaryAuthor: string;
  tags?: string[];
  titlePost?: string;
  previewPost?: string;
  textPost?: string;
  quote?: string;
  authorQuote?: string;
  photoLink?: string;
  videoLink?: string;
  linkURL?: string;
  linkDescription?: string;

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(post: Post) {
    this._id = post._id;
    this.userId = post.userId;
    this.type = post.type;
    this.publishAt = post.publishAt;
    this.createdAt = post.createdAt;
    this.isRepost = post.isRepost;
    this.primaryId = post.primaryId;
    this.primaryAuthor = post.primaryAuthor;
    this.tags = post.tags;
    this.titlePost = post.titlePost;
    this.previewPost = post.previewPost;
    this.textPost = post.textPost;
    this.quote = post.quote;
    this.authorQuote = post.authorQuote;
    this.photoLink = post.photoLink;
    this.videoLink = post.videoLink;
    this.linkURL = post.linkURL;
    this.linkDescription = post.linkDescription;
  }

}
