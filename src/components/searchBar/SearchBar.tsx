import { Search } from "@mui/icons-material";
import { Box, ButtonBase, InputBase, Paper } from "@mui/material";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const [disabled, setDisabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
    alert("Not implemented");
  };
  return (
    <Box
      sx={{
        width: "100%",
        mb: 2,
        display: "flex",
        flexDirection: "row-reverse",
        px: 3,
      }}
    >
      <form onSubmit={submitHandler}>
        <Paper
          elevation={3}
          sx={{
            width: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 1,
            gap: 1,
          }}
        >
          <ButtonBase type="submit" disabled={disabled}>
            <Search />
          </ButtonBase>
          <InputBase
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: "100%" }}
            placeholder="search..."
          />
        </Paper>
      </form>
    </Box>
  );
};

export default SearchBar;
