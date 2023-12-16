import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Typography,
} from "@mui/material";
import { IPost } from "../../interfaces/Post";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PostCard = ({
  postId,
  author,
  timestamp,
  title,
  upvotes,
  viewCount,
}: IPost) => {
  return (
    <Paper
      component={Link}
      to={`/post/${postId}`}
      elevation={4}
      sx={{
        textDecoration: "none",
        width: "100%",
        p: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <List disablePadding sx={{ marginRight: 1 }}>
          <ListItem>
            <ListItemButton
              sx={{ p: 0 }}
              disableGutters
              disableRipple
              disableTouchRipple
            >
              <ArrowUpward />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            disableGutters
            sx={{ justifyContent: "center", width: "100%" }}
          >
            <Typography>{upvotes}</Typography>
          </ListItem>
          <ListItem>
            <ListItemButton
              sx={{ p: 0 }}
              disableGutters
              disableRipple
              disableTouchRipple
            >
              <ArrowDownward />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box width={"100%"} pr={2}>
        <Typography variant="h5">{title}</Typography>
        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="subtitle2">
            {author} -{" "}
            {new Date(timestamp).toLocaleDateString("en-US", {
              year: "2-digit",
              day: "2-digit",
              month: "short",
            })}
          </Typography>
          <Typography variant="subtitle2">{viewCount} views</Typography>
        </Container>
      </Box>
    </Paper>
  );
};

export default PostCard;
