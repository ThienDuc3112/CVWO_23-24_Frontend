import { Button, Stack, TextField, Typography } from "@mui/material";
import { FormEventHandler, useState } from "react";
import { API_URL } from "../../costants";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErr] = useState({
    username: undefined as string | undefined,
    password: undefined as string | undefined,
  });
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert("Not fully implemented yet");
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
          alert(`Login successful, your jwt token is ${data.token}`);
        } else {
          setErr({ username: data.username, password: data.password });
        }
      });
    });
  };
  return (
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
    </Stack>
  );
};

export default LoginPage;
