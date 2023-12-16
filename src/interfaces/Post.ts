export interface IPost {
  postId: string;
  title: string;
  author: string;
  timestamp: number;
  upvotes: number;
  viewCount: number;
  tags: string[];
  content: string;
}
