import { Stack, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../costants";
import { ICategory } from "../../interfaces/Catagory";

const CategoryList = () => {
  const { data, err } = useFetch<ICategory[]>(`${API_URL}/category`);
  if (err) return <Typography>Error!</Typography>;
  if (!data) return <Typography>Loading...</Typography>;
  return (
    <>
      <Stack gap={0} pt={2}>
        {data.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </Stack>
    </>
  );
};

export default CategoryList;
