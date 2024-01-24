import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../costants";
import {
  Button,
  Container,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Post from "../../components/post/Post";
import { useFetch } from "../../hooks/useFetch";
import { IThread } from "../../interfaces/Post";
import { ICategory } from "../../interfaces/Catagory";

const EditThread = () => {
  const navigate = useNavigate();
  const { threadId } = useParams();
  const [post, setPost] = useState("");
  const [category, setCategory] = useState("" as number | "");
  const [title, setTitle] = useState("");
  const { data, err } = useFetch<IThread>(`${API_URL}/thread/${threadId}`);
  const { data: categories, err: categoryErr } = useFetch<ICategory[]>(
    `${API_URL}/category`
  );
  useEffect(() => {
    if (data) {
      setPost(data.content);
      setCategory(data.category_id);
      setTitle(data.title);
    }
  }, [data]);
  if (err || categoryErr) return <Typography>Error</Typography>;
  if (!data || !categories) return <Typography>Loading</Typography>;
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${API_URL}/thread/${threadId}`, {
      body: JSON.stringify({
        thread: {
          content: post,
          category,
          title,
        },
      }),
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((thread) => {
            console.log(thread);
            alert("Thread updated");
            navigate(`/t/${thread.id}`);
          });
        } else {
          alert("Cannot update the thread, please check all field");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Container>
      <Typography variant="h1">Create a thread</Typography>
      <Container>
        <form onSubmit={submitHandler}>
          <TextField
            label="Title"
            placeholder="Title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            variant="filled"
            fullWidth
            sx={{ my: 1 }}
          />
          <TextField
            select
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(parseInt(e.target.value))}
            sx={{ mb: 1 }}
            variant="filled"
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
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
          thred_id={-1}
          preview={true}
          content={post}
          created_at={new Date().toISOString()}
          id={-1}
          upvotes={0}
          user={data.user}
          user_id={data.user_id}
        />
      </Container>
    </Container>
  );
};

export default EditThread;
