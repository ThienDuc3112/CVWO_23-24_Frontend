import { Divider, List, ListItem, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import PostCard from "./ThreadCard";
import { TestPosts } from "../../test/PlaceholderData";
import { IPost } from "../../interfaces/Post";

const ThreadList = ({
  sortByUpvote,
  tag,
}: {
  sortByUpvote?: boolean;
  tag?: string;
}) => {
  const { data, err } = useFetch<IPost[]>(`http://localhost:3000/post`);
  console.log(data, err);
  if (err) return <Typography>There was an error</Typography>;
  if (!data) return <Typography>Loading...</Typography>;
  return (
    <>
      <Typography variant="h5">Recent posts</Typography>
      <Divider />
      <List>
        {data.map((post) => (
          <ListItem key={post.id}>
            <PostCard {...post} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ThreadList;
