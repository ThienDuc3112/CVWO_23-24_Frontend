import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";
import { API_URL } from "../../costants";

const VoteSidebar = ({
  upvotes,
  id,
  preview,
  isThread,
}: {
  upvotes: number;
  id: number;
  preview?: boolean;
  isThread: boolean;
}) => {
  const [upvote, setUpvote] = useState(upvotes);
  const [disabled, setDisabled] = useState(false);
  const handleVote = (action: boolean) => {
    if (preview) {
      alert("Preview mode");
      return;
    }
    setDisabled(true);
    const url = `${API_URL}/${isThread ? "thread" : "followup"}/${
      action ? "upvote" : "downvote"
    }/${id}`;
    fetch(url, {
      headers: {
        Authorization: `${window.localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          setUpvote((prev) => (action ? prev + 1 : prev - 1));
        } else {
          alert(`Error with code ${res.status}`);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setDisabled(false);
      });
  };
  return (
    <List disablePadding sx={{ marginRight: 1 }}>
      <ListItem>
        <ListItemButton
          sx={{ p: 0 }}
          disableGutters
          disableRipple
          disableTouchRipple
          onClick={() => handleVote(true)}
          disabled={disabled}
        >
          <ArrowUpward />
        </ListItemButton>
      </ListItem>
      <ListItem
        disablePadding
        disableGutters
        sx={{ justifyContent: "center", width: "100%" }}
      >
        <Typography>{upvote}</Typography>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ p: 0 }}
          disableGutters
          disableRipple
          disabled={disabled}
          disableTouchRipple
          onClick={() => handleVote(false)}
        >
          <ArrowDownward />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default VoteSidebar;
