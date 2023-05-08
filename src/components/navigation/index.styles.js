import { styled, Drawer, Box } from "@mui/material";

const NavigationDrawer = styled(Drawer)(({ theme }) => ({
  opacity: "1",
  width: "100%",
  height: "100%",
}));
const InnerDrawer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "350px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  button: {
    width: "25%",
    marginLeft: "2rem",
  },
}));
export { NavigationDrawer, InnerDrawer };
