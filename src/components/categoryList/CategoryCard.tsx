import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { ICategory } from "../../interfaces/Catagory";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useState } from "react";
import { API_URL } from "../../costants";

const CategoryCard = ({
  id,
  name,
  description,
  postCount,
  colour,
}: ICategory) => {
  const { user } = useUserContext();
  const [deleted, setDeleted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const deleteHandler = () => {
    setDisabled(true);
    fetch(`${API_URL}/category/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Category deleted");
          setDeleted(true);
        } else {
          alert(
            `Error status ${res.status}\nYour session may have ended, please logout/refresh then login again`
          );
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occured");
      })
      .finally(() => {
        setDisabled(false);
      });
  };
  if (deleted) return <></>;
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
            to={`/c/${id}`}
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
      {user && user.is_admin && (
        <div>
          <Button
            disabled={disabled}
            onClick={deleteHandler}
            color="error"
            variant="contained"
            sx={{ my: 1 }}
          >
            Delete
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default CategoryCard;
