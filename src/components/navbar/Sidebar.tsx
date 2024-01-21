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
import { ReactNode, useEffect, useState } from "react";
import {
  Menu,
  LocalFireDepartment,
  Gavel,
  AddCircle,
  Home,
  Login,
  Person,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const drawerWidth = 250;
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

const OptionList = ({
  options,
  open,
}: {
  options: { label: string; icon: ReactNode; path: string }[];
  open: boolean;
}) => (
  <List>
    {options.map((path, index) => (
      <ListItem
        key={index}
        disablePadding
        sx={{ display: "block", textDecoration: "none" }}
      >
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to={path.path}
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
              {path.icon}
            </ListItemIcon>
            <ListItemText primary={path.label} sx={{ opacity: open ? 1 : 0 }} />
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
  const [navOptions, setNavOptions] = useState({
    top: [
      { label: "Home", icon: <Home />, path: "/" },
      { label: "Top posts", icon: <LocalFireDepartment />, path: "/toppost" },
      { label: "Rules", icon: <Gavel />, path: "/rules" },
    ],
    bottom: [
      { label: "Login", icon: <Login />, path: "/login" },
      { label: "New thread", icon: <AddCircle />, path: "/create" },
    ],
  });
  const { login } = useUserContext();
  useEffect(() => {
    if (login) {
      setNavOptions({
        top: navOptions.top,
        bottom: [
          {
            label: "Profile",
            icon: <Person />,
            path: "/profile",
          },
          navOptions.bottom[1],
        ],
      });
    }
  }, [login]);
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
          <OptionList options={navOptions.top} open />
          <OptionList options={navOptions.bottom} open />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
