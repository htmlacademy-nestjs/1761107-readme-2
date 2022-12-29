export interface Comment {
  id: number;
  createdAt: Date;
  userId?: string;
  postId?: number;
  text: string;
}
