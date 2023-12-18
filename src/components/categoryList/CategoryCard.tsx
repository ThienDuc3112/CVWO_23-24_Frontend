import { Divider, Grid, Paper, Typography } from "@mui/material";
import { ICategory } from "../../interfaces/Catagory";
import { Link } from "react-router-dom";

const CategoryCard = ({ name, description, postCount, colour }: ICategory) => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{ border: 0, borderLeft: 5, borderColor: colour, pl: 1, pt: "4px" }}
    >
      <Grid container>
        <Grid item xs={11}>
          <Typography
            variant="h5"
            component={Link}
            sx={{ textDecoration: "none", color: "inherit" }}
            to={`/c/${name}`}
          >
            {name}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Grid>
        <Grid item xs={1} textAlign={"right"}>
          <Typography variant="caption">{postCount}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 1 }} />
    </Paper>
  );
};

export default CategoryCard;
