import { List, ListItem, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import ThreadCard from "./ThreadCard";
import { IThreadPreview } from "../../interfaces/Post";
import { API_URL } from "../../costants";
import { useRef } from "react";

const ThreadList = ({
  sortByUpvote,
  thread,
}: {
  sortByUpvote?: boolean;
  thread?: string;
}) => {
  const url = useRef(`${API_URL}/thread`);
  if (thread) url.current = `${API_URL}/category/${thread}`;
  const { data, err } = useFetch<IThreadPreview[]>(url.current);
  if (err) return <Typography>There was an error</Typography>;
  if (!data) return <Typography>Loading...</Typography>;
  if (sortByUpvote) data.sort((a, b) => b.upvotes - a.upvotes);
  return (
    <>
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
