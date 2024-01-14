import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../costants";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { IThread } from "../../interfaces/Post";
import ThreadCard from "../../components/threadList/ThreadCard";

const Search = () => {
  const { term } = useParams();
  const { data, err } = useFetch<IThread[]>(`${API_URL}/thread/search/${term}`);
  if (err) return <Typography>Error</Typography>;
  if (!data) return <Typography>Loading</Typography>;

  return (
    <Stack width={"80%"} m={"auto"}>
      <Typography variant="h1">Searching for "{term}"</Typography>
      {data.length == 0 && <Typography>Empty</Typography>}
      <List>
        {data.map((post) => (
          <ListItem key={post.id}>
            <ThreadCard {...post} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Search;
