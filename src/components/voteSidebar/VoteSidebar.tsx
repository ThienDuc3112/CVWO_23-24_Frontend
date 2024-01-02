import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";

const VoteSidebar = ({ upvotes, id }: { upvotes: number; id: string }) => {
  return (
    <List disablePadding sx={{ marginRight: 1 }}>
      <ListItem>
        <ListItemButton
          sx={{ p: 0 }}
          disableGutters
          disableRipple
          disableTouchRipple
        >
          <ArrowUpward />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        disableGutters
        sx={{ justifyContent: "center", width: "100%" }}
      >
        <Typography>{upvotes}</Typography>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ p: 0 }}
          disableGutters
          disableRipple
          disableTouchRipple
        >
          <ArrowDownward />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default VoteSidebar;
