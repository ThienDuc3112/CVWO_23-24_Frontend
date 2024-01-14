import { Divider, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ThreadList from "../../components/threadList/ThreadList";

const Category = () => {
  const { id } = useParams();
  return (
    <Stack width={"80%"} m={"auto"}>
      <Typography variant="h1">Showing filtered results</Typography>
      <Divider />
      <ThreadList thread={id} />
    </Stack>
  );
};

export default Category;
