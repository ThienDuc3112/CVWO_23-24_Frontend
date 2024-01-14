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
  AddCircle,
  Home,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 250;
const options = [["Home", "Top post", "News", "Rules"], ["New thread"]];
const icons = [
  [<Home />, <LocalFireDepartment />, <Campaign />, <Gavel />],
  [<AddCircle />],
];
const paths = [["/", "/toppost", "/news", "/rules"], ["/create"]];

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

const OptionList = ({ num, open }: { num: number; open: boolean }) => (
  <List>
    {options[num].map((text, index) => (
      <ListItem
        key={text}
        disablePadding
        sx={{ display: "block", textDecoration: "none" }}
      >
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to={paths[num][index]}
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
              {icons[num][index]}
            </ListItemIcon>
            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>
    ))}
  </List>
);

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
          <OptionList num={0} open />
          <OptionList num={1} open />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
