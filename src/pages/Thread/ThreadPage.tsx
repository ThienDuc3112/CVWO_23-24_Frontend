import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Container, Stack, Typography } from "@mui/material";
import Post from "../../components/post/Post";
import { IPost } from "../../interfaces/Post";
import { API_URL } from "../../costants";

const ThreadPage = () => {
  const { threadid } = useParams();
  const { data, err } = useFetch<{
    id: number;
    title: string;
    posts: IPost[];
  }>(`${API_URL}/thread/${threadid}`);
  if (err) return <p>Error</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <Container sx={{ width: "80%", margin: "auto" }}>
      <Stack>
        <Typography variant="h1">{data.title}</Typography>
        <Post {...data.posts[0]} />
        <Typography variant="h1">Follow up</Typography>
        {data.posts.slice(1).map((post) => (
          <Post {...post} />
        ))}
      </Stack>
    </Container>
  );
};

export default ThreadPage;
