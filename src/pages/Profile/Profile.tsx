import { Container, Divider, Grid, List, Typography } from "@mui/material";
import ThreadList from "../../components/threadList/ThreadList";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../costants";
import { IPost } from "../../interfaces/Post";
import Post from "../../components/post/Post";
import { IUser } from "../../interfaces/User";

const Profile = () => {
  const { id } = useParams();
  const { data, err } = useFetch<IPost[]>(`${API_URL}/followup/user/${id}`);
  const { data: user, err: userErr } = useFetch<IUser>(
    `${API_URL}/users/${id}`
  );
  if (err || userErr) return <Typography>Error</Typography>;
  if (!user) return <Typography>Loading</Typography>;
  return (
    <Container>
      <Typography variant="h1">Profile</Typography>
      <Typography variant="h5">Username: {user.username}</Typography>
      <Typography variant="h5">
        Role: {user.is_admin ? "Admin" : "User"}
      </Typography>
      <Grid direction={"row"} container my={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">Threads</Typography>
          <Divider sx={{ mx: 2 }} />
          <ThreadList user_id={id} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1">Follow ups</Typography>
          <Divider sx={{ mx: 2 }} />
          {err ? (
            <Typography>Error</Typography>
          ) : data ? (
            <List>
              {data.length > 0 ? (
                data.map((post, index) => (
                  <Link
                    to={`/t/${post.thred_id}`}
                    style={{ textDecoration: "inherit", color: "inherit" }}
                  >
                    <Post {...post} key={index} />
                  </Link>
                ))
              ) : (
                <Typography>No follow ups here...</Typography>
              )}
            </List>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
