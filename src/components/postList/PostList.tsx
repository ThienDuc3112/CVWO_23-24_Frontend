import { Divider, List, ListItem, Typography } from "@mui/material";
// import { useFetch } from "../../hooks/useFetch";
import PostCard from "./PostCard";
import { TestPosts } from "../../test/PlaceholderData";

const PostList = () => {
  // const { data, err } = useFetch<IPost[]>(``);
  //   if (err) return <Typography>There was an error</Typography>;
  //   if (!data) return <Typography>Loading...</Typography>;
  return (
    <>
      <Typography variant="h5">Recent posts</Typography>
      <Divider />
      <List>
        {TestPosts.map((post) => (
          <ListItem>
            <PostCard {...post} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PostList;