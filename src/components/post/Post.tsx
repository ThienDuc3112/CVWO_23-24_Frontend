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
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const Post = ({
  upvotes,
  content,
  user: author,
  created_at,
  id,
  preview,
  thred_id,
  user_id,
}: IPost & { preview?: boolean }) => {
  const navigation = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const url = useRef(`${API_URL}/followup`);
  const isThread = useRef(false);
  const { user } = useUserContext();
  if (!preview && id == -1) {
    id = thred_id;
    url.current = `${API_URL}/thread`;
    isThread.current = true;
  }
  const deleteHandler = () => {
    fetch(`${url.current}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
      },
    }).then((res) => {
      if (res.ok) {
        alert("Post deleted");
        setDeleted(true);
        if (isThread) navigation("/");
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
  if (deleted) return <></>;
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
        {user_id == user?.id || user?.is_admin ? (
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
        ) : (
          <div></div>
        )}
        <Typography sx={{ textAlign: "right", mx: 2 }}>
          {author?.username} - {convertTimestamp(created_at)}
        </Typography>
      </div>
    </Paper>
  );
};

export default Post;
