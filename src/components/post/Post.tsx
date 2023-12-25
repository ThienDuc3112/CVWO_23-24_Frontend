import { Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { IPost } from "../../interfaces/Post";
import VoteSidebar from "../voteSidebar/VoteSidebar";
import MuiMarkdown from "mui-markdown";
import { convertTimestamp } from "../../helpers/timestampToDateString";

const Post = ({ upvotes, content, author, timestamp, postId }: IPost) => {
  return (
    <Paper elevation={3} sx={{ my: 2, py: 2 }}>
      <Stack direction={"row"}>
        <VoteSidebar {...{ upvotes, postId }} />
        <Container disableGutters>
          <MuiMarkdown>{content}</MuiMarkdown>
        </Container>
      </Stack>
      <Divider sx={{ mx: 2 }} />
      <Typography sx={{ textAlign: "right", mx: 2 }}>
        {author} - {convertTimestamp(timestamp)}
      </Typography>
    </Paper>
  );
};

export default Post;