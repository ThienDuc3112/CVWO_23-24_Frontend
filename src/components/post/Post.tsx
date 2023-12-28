import { Container, Divider, Paper, Stack, Typography } from "@mui/material";
import { IPost } from "../../interfaces/Post";
import VoteSidebar from "../voteSidebar/VoteSidebar";
import MuiMarkdown from "mui-markdown";
import { convertTimestamp } from "../../helpers/timestampToDateString";
import { useThemeContext } from "../../contexts/ThemeContext";

const Post = ({ upvotes, content, author, timestamp, postId }: IPost) => {
  const { theme } = useThemeContext();
  return (
    <Paper elevation={3} sx={{ my: 2, p: 2 }}>
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
