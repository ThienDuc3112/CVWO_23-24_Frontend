import { Button, Stack, TextField, Typography } from "@mui/material";
import { FormEventHandler, useState } from "react";
import { API_URL } from "../../costants";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErr] = useState({
    username: undefined as string[] | undefined,
    password: undefined as string[] | undefined,
    passwordConfirmation: undefined as string[] | undefined,
    email: undefined as string[] | undefined,
  });
  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/users`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("User created");
          navigate("/login");
        } else {
          res.json().then((data) => {
            setErr({
              username: data.username,
              email: data.email,
              password: data.password,
              passwordConfirmation: data.password_confirmation,
            });
          });
        }
      })
      .catch((err: any) => {
        console.error(err);
        alert("Generic error");
      });
  };
  return (
    <Stack sx={{ m: "auto", width: "40%", minWidth: "300px" }}>
      <Typography variant="h2" sx={{ textAlign: "center", m: 2 }}>
        <b>Signup</b>
      </Typography>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <TextField
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          label="username"
        />
        {errors.username && (
          <Typography color={"error.main"}>
            {errors.username.join(", ")}
          </Typography>
        )}
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
        />
        {errors.email && (
          <Typography color={"error.main"}>
            {errors.email.join(", ")}
          </Typography>
        )}
        <TextField
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="password"
        />
        {errors.password && (
          <Typography color={"error.main"}>
            {errors.password.join(", ")}
          </Typography>
        )}
        <TextField
          type="password"
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
          label="Password Confirmation"
        />
        {errors.passwordConfirmation && (
          <Typography color={"error.main"}>
            {errors.passwordConfirmation.join(", ")}
          </Typography>
        )}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Stack>
  );
};

export default Singup;
