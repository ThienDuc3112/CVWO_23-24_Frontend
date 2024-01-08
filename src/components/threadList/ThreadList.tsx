import { Divider, List, ListItem, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import ThreadCard from "./ThreadCard";
import { IThreadPreview } from "../../interfaces/Post";
import { API_URL } from "../../costants";

const ThreadList = ({
  sortByUpvote,
  thread,
}: {
  sortByUpvote?: boolean;
  thread?: string;
}) => {
  const { data, err } = useFetch<IThreadPreview[]>(`${API_URL}/thread`);
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
