import { Box, Button, Container, Paper, Typography } from "@mui/material";

const services = ["Service 1", "Service 2", "Service 3"];

const HomePage = () => {
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          pt: 4,
          textAlign: "center",
          color: "primary.main",
          gap: 4,
        }}
      >
        Home
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          gap: 3,
        }}
      >
        {services.map((str) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 360 } }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{str}</Typography>
              <Typography mt={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                iusto iste assumenda saepe ullam accusantium sed suscipit
                aliquid inventore, quasi nemo atque possimus totam maiores
                explicabo recusandae necessitatibus expedita aut?
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Learn more
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default HomePage;
