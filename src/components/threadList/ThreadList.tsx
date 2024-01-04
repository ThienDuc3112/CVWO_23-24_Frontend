import { Divider, List, ListItem, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import ThreadCard from "./ThreadCard";
import { IPost, IThread } from "../../interfaces/Post";

const ThreadList = ({
  sortByUpvote,
  tag,
}: {
  sortByUpvote?: boolean;
  tag?: string;
}) => {
  const { data, err } = useFetch<IThread[]>(`http://localhost:3000/thred`);
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
            <ThreadCard {...post} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ThreadList;
