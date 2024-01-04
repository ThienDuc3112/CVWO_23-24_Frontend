import { Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { IPost } from "../../interfaces/Post";
import VoteSidebar from "../voteSidebar/VoteSidebar";
import MuiMarkdown from "mui-markdown";
import { convertTimestamp } from "../../helpers/timestampToDateString";

const Post = ({
  upvotes,
  content,
  username,
  created_at,
  id,
  preview,
}: IPost & { preview?: boolean }) => {
  return (
    <Paper elevation={3} sx={{ my: 2, p: 2 }}>
      <Stack direction={"row"}>
        <VoteSidebar {...{ upvotes, id, preview }} />
        <Container disableGutters>
          <MuiMarkdown>{content}</MuiMarkdown>
        </Container>
      </Stack>
      <Divider sx={{ mx: 2 }} />
      <Typography sx={{ textAlign: "right", mx: 2 }}>
        {username} - {convertTimestamp(created_at)}
      </Typography>
    </Paper>
  );
};

export default Post;
