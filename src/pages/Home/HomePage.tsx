import { Container, Grid, Typography } from "@mui/material";
import PostList from "../../components/postList/PostList";
import CategoryList from "../../components/catagoryList/CategoryList";

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
      <Grid container spacing={3} sx={{ height: "200vh" }}>
        <Grid
          item
          xs={12}
          md={7}
          lg={8}
          sx={{ height: "100%" }}
          order={{ xs: 2, md: 1 }}
        >
          <PostList />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={4}
          sx={{ height: "100%" }}
          order={{ xs: 1, md: 2 }}
        >
          <CategoryList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
