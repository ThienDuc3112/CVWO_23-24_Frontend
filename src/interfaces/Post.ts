export interface IPost {
  id: string;
  username: string;
  content: string;
  upvotes: number;
  created_at: string;
}

export interface IThread {
  id: string;
  username: string;
  upvotes: number;
  category: string;
  created_at: string;
  title: string;
}
