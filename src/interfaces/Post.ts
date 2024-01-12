export interface IPost {
  id: number;
  content: string;
  username: string;
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
  username: string;
  upvotes: number;
  category_id: number;
  created_at: string;
}
