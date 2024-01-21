import { Button, Stack, TextField, Typography } from "@mui/material";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../costants";
import { IPost } from "../../interfaces/Post";
import { useFetch } from "../../hooks/useFetch";
import Post from "../../components/post/Post";

const EditPost = () => {
  const { postId } = useParams();
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [post, setPost] = useState("");

  const { data, err } = useFetch<IPost>(`${API_URL}/followup/${postId}`);
  useEffect(() => {
    if (!data) return;
    setUsername(data.username);
    setPost(data.content);
  }, [data]);
  if (err) return <Typography>Error</Typography>;
  if (!data) return <Typography>Loading</Typography>;
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/followup/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({ post: { username, content: post } }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data: IPost) => {
          alert("Post updated");
          navigation(`/t/${data.thred_id}`);
        });
      } else {
        alert("Unable to edit message");
      }
    });
  };
  return (
    <Stack sx={{ width: "80%", m: "auto" }}>
      <Typography variant="h1">Edit your post</Typography>
      <form onSubmit={submitHandler}>
        <TextField
          label="Username"
          placeholder="What do you go by?"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          variant="filled"
          fullWidth
          sx={{ my: 1 }}
        />
        <TextField
          variant="filled"
          value={post}
          multiline
          onChange={(e) => {
            setPost(e.target.value);
          }}
          label="Post"
          size="medium"
          sx={{
            width: "100%",
            pb: 1,
          }}
          placeholder="Type out what you think"
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <Typography variant="h1">Preview</Typography>
      <Post
        thred_id={-1}
        preview={true}
        content={post}
        created_at={new Date().toISOString()}
        id={-1}
        upvotes={0}
        username={username}
      />
    </Stack>
  );
};

export default EditPost;
