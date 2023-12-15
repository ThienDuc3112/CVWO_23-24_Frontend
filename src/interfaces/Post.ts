export interface IPost {
  postId: string;
  title: string;
  author: string;
  timestamp: number;
  upvotes: number;
  view: number;
  tags: string[];
  content: string;
}
