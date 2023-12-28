import { Container, Typography } from "@mui/material";
import ThreadList from "../../components/threadList/ThreadList";

const TopPost = () => {
  return (
    <Container>
      <Typography variant="h1" sx={{ textAlign: "center", my: 2 }}>
        Top posts
      </Typography>
      <ThreadList sortByUpvote={true} />
    </Container>
  );
};

export default TopPost;
