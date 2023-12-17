import { Divider, Stack, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { CategoryTestData } from "../../test/PlaceholderData";

const CategoryList = () => {
  return (
    <>
      <Typography variant="h5">Recent posts</Typography>
      <Divider />
      <Stack gap={0} pt={2}>
        {CategoryTestData.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </Stack>
    </>
  );
};

export default CategoryList;
