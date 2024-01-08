import {
  Box,
  Container,
  Paper as MUIPaper,
  Typography,
  styled,
} from "@mui/material";
import { IThreadPreview } from "../../interfaces/Post";
import { Link } from "react-router-dom";
import VoteSidebar from "../voteSidebar/VoteSidebar";
import { convertTimestamp } from "../../helpers/timestampToDateString";

const Paper = styled(MUIPaper)({
  width: "100%",
  padding: 8,
  display: "flex",
  alignItems: "center",
  ":hover": {
    boxShadow: 10,
  },
});

const ThreadCard = ({
  id,
  username,
  created_at,
  title,
  upvotes,
}: IThreadPreview) => {
  return (
    <Paper elevation={4}>
      <Box>
        <VoteSidebar upvotes={upvotes} id={id} />
      </Box>
      <Box
        component={Link}
        to={`/t/${id}`}
        sx={{ textDecoration: "none", color: "inherit" }}
        width={"100%"}
        pr={2}
      >
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
            {username} - {convertTimestamp(created_at)}
          </Typography>
        </Container>
      </Box>
    </Paper>
  );
};

export default ThreadCard;
