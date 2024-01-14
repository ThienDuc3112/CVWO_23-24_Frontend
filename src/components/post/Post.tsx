import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { IPost } from "../../interfaces/Post";
import VoteSidebar from "../voteSidebar/VoteSidebar";
import MuiMarkdown from "mui-markdown";
import { convertTimestamp } from "../../helpers/timestampToDateString";
import { API_URL } from "../../costants";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Post = ({
  upvotes,
  content,
  username,
  created_at,
  id,
  preview,
  thred_id,
}: IPost & { preview?: boolean }) => {
  const navigation = useNavigate();
  const url = useRef(`${API_URL}/followup`);
  const isThread = useRef(false);
  if (!preview && id == -1) {
    id = thred_id;
    url.current = `${API_URL}/thread`;
    isThread.current = true;
  }
  const deleteHandler = () => {
    fetch(`${url.current}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        alert("Post deleted");
      } else {
        alert("Error in deleting post");
      }
    });
  };
  const editHandler = () => {
    if (isThread.current) {
      navigation(`/edit/thread/${id}`);
    } else {
      navigation(`/edit/post/${id}`);
    }
  };
  return (
    <Paper elevation={3} sx={{ my: 2, p: 2 }}>
      <Stack direction={"row"}>
        <VoteSidebar
          {...{ upvotes, id, preview, isThread: isThread.current }}
        />
        <Container disableGutters>
          <MuiMarkdown>{content}</MuiMarkdown>
        </Container>
      </Stack>
      <Divider sx={{ mx: 2, my: 1 }} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            variant="contained"
            sx={{ mx: 1, height: "28px" }}
            onClick={
              preview
                ? () => {
                    alert("Preview mode");
                  }
                : editHandler
            }
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ mx: 1, height: "28px" }}
            onClick={
              preview
                ? () => {
                    alert("Preview mode");
                  }
                : deleteHandler
            }
          >
            Delete
          </Button>
        </div>
        <Typography sx={{ textAlign: "right", mx: 2 }}>
          {username} - {convertTimestamp(created_at)}
        </Typography>
      </div>
    </Paper>
  );
};

export default Post;
