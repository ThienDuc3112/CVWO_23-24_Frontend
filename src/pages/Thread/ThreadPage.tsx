import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Post from "../../components/post/Post";
import { IThread } from "../../interfaces/Post";
import { API_URL } from "../../costants";
import { FormEventHandler, useState } from "react";

const ThreadPage = () => {
  const { threadid } = useParams();
  const [username, setUsername] = useState("");
  const [post, setPost] = useState("");
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/thread/${threadid}`, {
      body: JSON.stringify({
        post: {
          content: post,
          username,
        },
      }),
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((json) => {
            console.log(json);
            alert("Response posted");
            data?.followups.push(json);
            setUsername("");
            setPost("");
          });
        } else {
          alert(`Cannot post, error code ${res.status}`);
        }
      })
      .catch((err) => console.error(err));
  };
  const { data, err } = useFetch<IThread>(`${API_URL}/thread/${threadid}`);
  if (err) return <p>Error</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <Container sx={{ width: "80%", margin: "auto" }}>
      <Stack>
        <Typography variant="h1">{data.title}</Typography>
        <Post
          content={data.content}
          created_at={data.created_at}
          id={-1}
          thred_id={data.id}
          upvotes={data.upvotes}
          username={data.username}
        />
        <Typography variant="h1">Follow up</Typography>
        {data.followups.map((post) => (
          <Post {...post} key={post.id} />
        ))}
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
        <Divider />
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
    </Container>
  );
};

export default ThreadPage;
