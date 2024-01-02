import { Container, TextareaAutosize, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import { useState } from "react";

const CreatePostPage = () => {
  const [post, setPost] = useState("");
  return (
    <Container>
      <Typography variant="h1">Create a thread</Typography>
      <Container>
        <TextareaAutosize
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
          placeholder="Type out what you think"
          style={{
            width: "100%",
            height: 200,
            resize: "none",
          }}
        />
        <MuiMarkdown>{post}</MuiMarkdown>
      </Container>
    </Container>
  );
};

export default CreatePostPage;
