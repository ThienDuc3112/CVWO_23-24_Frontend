import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useUserContext } from "../../contexts/UserContext";
import { FormEventHandler, useState } from "react";
import { API_URL } from "../../costants";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/categoryList/CategoryCard";

const CreateCategory = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("#ffffff");
  const [err, setErr] = useState(
    {} as {
      name?: string;
      description?: string;
      colour?: string;
    }
  );
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (name.length == 0 || description.length == 0 || colour.length != 7) {
      alert("Please make sure all fields are presence and valid");
      return;
    }
    fetch(`${API_URL}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify({
        category: {
          name: name,
          description: description,
          colour: colour,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Created new category");
          navigate("/");
        } else {
          switch (res.status) {
            case 401:
              alert(
                "User authorization failed, your seesion might have expired, please refresh this and try login again"
              );
              navigate("/");
              break;
            case 422:
              res.json().then((data) => setErr(data));
              break;
            default:
              alert(`Error code: ${res.status} occured`);
              break;
          }
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Generic error happened");
      });
  };
  if (!user || !user.is_admin)
    return <Typography>You are not authroized to go here</Typography>;
  return (
    <Container>
      <Typography variant="h1">Create a new category</Typography>
      <Container sx={{ my: 3 }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={submitHandler}
        >
          <TextField
            variant="filled"
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErr((prev) => {
                return { ...prev, name: undefined };
              });
            }}
            sx={{ mb: 1 }}
          />
          {err.name && <Typography color={"error.main"}>{err.name}</Typography>}
          <TextField
            variant="filled"
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setErr((prev) => {
                return { ...prev, description: undefined };
              });
            }}
            sx={{ mb: 1 }}
          />
          {err.description && (
            <Typography color={"error.main"}>{err.description}</Typography>
          )}
          <TextField
            variant="filled"
            fullWidth
            label="Colour"
            value={colour}
            onChange={(e) => {
              setColour(e.target.value.slice(0, 7));
              setErr((prev) => {
                return { ...prev, colour: undefined };
              });
            }}
          />
          {err.colour && (
            <Typography color={"error.main"}>{err.colour}</Typography>
          )}
          {!/#[a-fA-F0-9]{6}/gm.test(colour) && (
            <Typography color={"error.main"}>Not a valid colour</Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, width: "200px" }}
          >
            Create
          </Button>
        </form>
      </Container>
      <Divider sx={{ my: 1 }} />
      <Typography variant="h1">Preview</Typography>
      <CategoryCard
        name={name}
        description={description}
        postCount={0}
        colour={colour}
        id={0}
      />
    </Container>
  );
};

export default CreateCategory;
