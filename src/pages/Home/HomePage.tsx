import { Container, Grid, Typography } from "@mui/material";
import PostList from "../../components/postList/PostList";

const HomePage = () => {
  return (
    <Container sx={{ width: "100%", p: 0 }}>
      <Typography
        variant="h1"
        sx={{
          pt: 4,
          textAlign: "center",
          color: "primary",
          gap: 4,
        }}
      >
        Home
      </Typography>
      <Grid container spacing={1} sx={{ height: "200vh" }}>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ height: "100%" }}
          order={{ xs: 2, md: 1 }}
        >
          <PostList />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ bgcolor: "blue", height: "100%" }}
          order={{ xs: 1, md: 2 }}
        >
          Catagories
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
