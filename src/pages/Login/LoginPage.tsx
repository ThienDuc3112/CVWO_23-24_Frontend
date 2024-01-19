import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { FormEventHandler, useState } from "react";
import { API_URL } from "../../costants";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErr] = useState({
    username: undefined as string | undefined,
    password: undefined as string | undefined,
  });
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => {
      res.json().then((data) => {
        if (res.ok) {
          window.localStorage.setItem("authToken", data.token);
          alert("Login");
          navigate("/");
        } else {
          setErr({ username: data.username, password: data.password });
        }
      });
    });
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ width: 1, height: "100vh" }}
    >
      <Stack m={"auto"} width={"40%"} minWidth={"300px"} textAlign={"center"}>
        <Typography variant="h2">
          <b>Sign in</b>
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          onSubmit={submitHandler}
        >
          <TextField
            label="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          {errors.username && (
            <Typography sx={{ color: "error.main" }}>
              {errors.username}
            </Typography>
          )}
          <TextField
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {errors.password && (
            <Typography sx={{ color: "error.main" }}>
              {errors.password}
            </Typography>
          )}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        <Divider sx={{ my: 2, borderBottomWidth: 3 }} />
        <Typography>New here? Sign up now!</Typography>
        <Button variant="contained" sx={{ my: 1 }}>
          <Link
            to={"/signup"}
            style={{
              width: "100%",
              textDecoration: "inherit",
              color: "inherit",
            }}
          >
            Sign up
          </Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
