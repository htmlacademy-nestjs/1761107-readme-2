export interface Comment {
  id?: string;
  createdAt: Date;
  userId?: string;
  postId?: string;
  text: string;
}
