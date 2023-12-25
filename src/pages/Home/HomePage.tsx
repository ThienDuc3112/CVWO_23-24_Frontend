import { Container, Grid, Typography } from "@mui/material";
import ThreadList from "../../components/threadList/ThreadList";
import CategoryList from "../../components/categoryList/CategoryList";
import SearchBar from "../../components/searchBar/SearchBar";
import Background from "../../components/background/Background";

const HomePage = () => {
  return (
    <Container sx={{ width: "100%", p: 0 }}>
      <Background />
      <Typography
        variant="h1"
        sx={{
          pt: 4,
          textAlign: "center",
          color: "white",
        }}
      >
        Home
      </Typography>
      <SearchBar />
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={7}
          lg={8}
          sx={{ height: "100%" }}
          order={{ xs: 2, md: 1 }}
        >
          <ThreadList />
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
