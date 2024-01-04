import {
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import Post from "../../components/post/Post";

const CreatePostPage = () => {
  const [post, setPost] = useState("");
  const [category, setCategory] = useState("" as number | "");
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post, title, username, category);
    alert("Not implemented");
  };
  return (
    <Container>
      <Typography variant="h1">Create a thread</Typography>
      <Container>
        <form onSubmit={submitHandler}>
          <Grid container>
            <Grid item xs={8} pr={1} pb={1}>
              <TextField
                label="Title"
                placeholder="Title..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                variant="filled"
                fullWidth
              />
            </Grid>
            <Grid item xs={4} pl={1} pb={1}>
              <TextField
                variant="filled"
                label="Username"
                placeholder="What you go by?"
                value={username}
                fullWidth
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Grid>
            <TextField
              select
              fullWidth
              label="Category"
              value={category}
              onChange={(e) => setCategory(parseInt(e.target.value))}
              sx={{ mb: 1 }}
              variant="filled"
            >
              {[1, 2, 3, 4, 5, 6].map((category) => (
                <MenuItem key={category} value={category}>
                  Category {category}{" "}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
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
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        <Typography variant="h1">Preview</Typography>
        <Divider />
        <Post
          preview={true}
          content={post}
          created_at={new Date().toISOString()}
          id="-1"
          upvotes={0}
          username={username}
        />
      </Container>
    </Container>
  );
};

export default CreatePostPage;
