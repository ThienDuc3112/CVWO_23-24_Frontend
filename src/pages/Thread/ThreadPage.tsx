// import { useParams } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
import { Container, Stack, Typography } from "@mui/material";
import { TestPosts } from "../../test/PlaceholderData";
import Post from "../../components/post/Post";

const ThreadPage = () => {
  // const {threadid} = useParams();
  // const {data,err} = useFetch(`${process.env.API_URL}/thread/${threadid}`)
  // if(err) return <p>Error</p>
  // if(!data) return <p>Loading...</p>
  const thread = TestPosts[2];
  return (
    <Container sx={{ width: "80%", margin: "auto" }}>
      <Stack>
        <Typography variant="h1">{thread.title}</Typography>
        <Post {...thread} />
        <Typography variant="h1">Follow up</Typography>
        {TestPosts.filter((post, index) => index != 2).map((post) => (
          <Post {...post} />
        ))}
      </Stack>
    </Container>
  );
};

export default ThreadPage;
