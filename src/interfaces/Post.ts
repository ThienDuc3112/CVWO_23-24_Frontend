export interface IPost {
  id: number;
  content: string;
  user: {
    username: string;
  };
  user_id: number;
  upvotes: number;
  thred_id: number;
  created_at: string;
}

export interface IThread extends IThreadPreview {
  content: string;
  followups: IPost[];
}

export interface IThreadPreview {
  id: number;
  title: string;
  user: { username: string };
  upvotes: number;
  category_id: number;
  created_at: string;
  user_id: number;
}
