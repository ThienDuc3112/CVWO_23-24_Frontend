import { List, ListItem, Typography } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import ThreadCard from "./ThreadCard";
import { IThreadPreview } from "../../interfaces/Post";
import { API_URL } from "../../costants";
import { useRef } from "react";

const ThreadList = ({
  sortByUpvote,
  category,
  user_id,
}: {
  sortByUpvote?: boolean;
  category?: string;
  user_id?: string;
}) => {
  const url = useRef(`${API_URL}/thread`);
  if (category) url.current = `${API_URL}/category/${category}`;
  else if (user_id) url.current = `${API_URL}/thread/user/${user_id}`;
  const { data, err } = useFetch<IThreadPreview[]>(url.current);
  if (err) return <Typography>There was an error</Typography>;
  if (!data) return <Typography>Loading...</Typography>;
  if (sortByUpvote) data.sort((a, b) => b.upvotes - a.upvotes);
  return (
    <>
      <List>
        {data.length > 0 ? (
          data.map((post) => (
            <ListItem key={post.id}>
              <ThreadCard {...post} />
            </ListItem>
          ))
        ) : (
          <Typography>No posts here...</Typography>
        )}
      </List>
    </>
  );
};

export default ThreadList;
