import { Comment } from '@readme/shared-types';

export class CommentEntity implements Comment {

  id: number;
  createdAt: Date;
  userId: string;
  postId: number;
  text: string;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }


  public toObject() {
    return { ...this };
  }

  public fillEntity(comment: Comment) {
    this.id = comment.id;
    this.createdAt = comment.createdAt;
    this.userId = comment.userId;
    this.postId = comment.postId;
    this.text = comment.text;
  }

}
