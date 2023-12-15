import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { IPost } from "../../interfaces/Post";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const PostCard = ({ author, tags, timestamp, title, upvotes, view }: IPost) => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        p: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <List disablePadding sx={{ marginRight: 1 }}>
          <ListItem>
            <ArrowUpward />
          </ListItem>
          <ListItem
            disablePadding
            disableGutters
            sx={{ justifyContent: "center", width: "100%" }}
          >
            <Typography>{upvotes}</Typography>
          </ListItem>
          <ListItem>
            <ArrowDownward />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2">
          {author} -{" "}
          {new Date(timestamp).toLocaleDateString("en-US", {
            year: "2-digit",
            day: "2-digit",
            month: "short",
          })}
        </Typography>
      </Box>
    </Paper>
  );
};

export default PostCard;
