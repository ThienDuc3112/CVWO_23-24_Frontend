import {
  CSSObject,
  Divider,
  Drawer as MUIDrawer,
  IconButton,
  Theme,
  styled,
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  ListItemButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import {
  Menu,
  LocalFireDepartment,
  Campaign,
  Gavel,
  AccessTime,
  Message,
  AddCircle,
  Person,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 250;
const options = [
  ["Recent", "Top post", "News", "Rules"],
  ["Message", "Create post", "Profile"],
];
const icons = [
  [<AccessTime />, <LocalFireDepartment />, <Campaign />, <Gavel />],
  [<Message />, <AddCircle />, <Person />],
];
const paths = [
  ["/recent", "/toppost", "/news", "/rules"],
  ["/message", "/create", "/dashboard"],
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MUIDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <IconButton disableRipple onClick={() => setOpen((prev) => !prev)}>
          <Menu />
        </IconButton>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <List>
            {options[0].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block", textDecoration: "none" }}
              >
                <Link
                  style={{ textDecoration: "inherit", color: "inherit" }}
                  to={paths[0][index]}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {icons[0][index]}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <List>
            {options[1].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block", textDecoration: "none" }}
              >
                <Link
                  to={paths[1][index]}
                  style={{ textDecoration: "inherit", color: "inherit" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {icons[1][index]}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
