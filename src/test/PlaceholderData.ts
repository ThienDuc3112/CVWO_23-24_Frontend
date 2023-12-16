import { ICategory } from "../interfaces/Catagory";
import { IPost } from "../interfaces/Post";

export const CategoryTestData: ICategory[] = [
  {
    name: "General discussion",
    description:
      "Discuss about anything rhythm game related that doesn't belong to other categories",
    postCount: 8163,
    popularTags: ["Votes", "Arcaea"],
    colour: "primary.main",
  },
  {
    name: "Question",
    description: "Post your rhythm game question here",
    postCount: 293,
    popularTags: [],
    colour: "secondary.main",
  },
  {
    name: "Meme",
    description: "MEMES, MEMES, AND MORE MEMES",
    postCount: 42069,
    popularTags: ["meme"],
    colour: "warning.main",
  },
  {
    name: "Achievements",
    description: "Proud of something? Share it here to everyone",
    postCount: 1542,
    popularTags: ["Upscore", "Full combo", "All perfect", "Unlocks"],
    colour: "success.main",
  },
];

export const TestPosts: IPost[] = [
  {
    author: "Anon",
    title: "Test thing",
    content: "test",
    postId: "jioasfhg",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 100,
    viewCount: 200,
  },
  {
    author: "Huyen",
    title: "First post?",
    content: "Wao test data is so cool nice",
    postId: "id",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 1000,
    viewCount: -420,
  },
  {
    author: "Anon",
    content: "test",
    title:
      "Guys help, how do I make this sentence longer so I can test what a long sentence would be like, oh god it's hiddious",
    postId: "waoooo",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 100,
    viewCount: 200,
  },
];
