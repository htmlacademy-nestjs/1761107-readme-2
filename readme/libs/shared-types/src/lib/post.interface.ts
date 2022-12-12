import { PostType } from './post-type.enum';

export interface Post {
  _id?: string;
  userId: string;
  type: PostType;
  publishAt?: Date;
  createdAt?: Date;
  isRepost: boolean;
  primaryId: string;
  primaryAuthor: string;
}
