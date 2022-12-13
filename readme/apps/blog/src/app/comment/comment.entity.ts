import { Comment } from '@readme/shared-types';

export class CommentEntity implements Comment {

  _id?: string;
  createdAt: Date;
  userId?: string;
  postId?: string;
  text: string;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }


  public toObject() {
    return { ...this };
  }

  public fillEntity(comment: Comment) {
    this._id = comment.id;
    this.createdAt = comment.createdAt;
    this.userId = comment.userId;
    this.postId = comment.postId;
    this.text = comment.text;
  }

}
