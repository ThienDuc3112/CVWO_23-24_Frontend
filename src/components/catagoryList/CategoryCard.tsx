import { Grid, Paper, Typography } from "@mui/material";
import { ICategory } from "../../interfaces/Catagory";

const CategoryCard = ({
  name,
  description,
  postCount,
  popularTags,
  colour,
}: ICategory) => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{ border: 0, borderLeft: 5, borderColor: colour, pl: 1 }}
    >
      <Grid container>
        <Grid xs={11}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Grid>
        <Grid xs={1} textAlign={"right"}>
          <Typography variant="caption">{postCount}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CategoryCard;
