import { List, ListItem, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import PostCard from "./PostCard";
import { IPost } from "../../interfaces/Post";

const testData: IPost[] = [
  {
    author: "Anon",
    title: "Test thing",
    content: "test",
    postId: "id",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 100,
    view: 200,
  },
  {
    author: "Huyen",
    title: "First post?",
    content: "Wao test data is so cool nice",
    postId: "id",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 1000,
    view: -420,
  },
  {
    author: "Anon",
    content: "test",
    title:
      "Guys help, how do I make this sentence longer so I can test what a long sentence would be like, oh god it's hiddious",
    postId: "id",
    tags: ["Educational", "Test"],
    timestamp: Date.now(),
    upvotes: 100,
    view: 200,
  },
];

const PostList = () => {
  const { data, err } = useFetch<IPost[]>(``);
  //   if (err) return <Typography>There was an error</Typography>;
  //   if (!data) return <Typography>Loading...</Typography>;
  return (
    <List>
      {testData.map((post) => (
        <ListItem>
          <PostCard {...post} />
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
