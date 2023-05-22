import { Box, styled } from "@mui/material";

const InnerProfileInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "fixed",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px",
  maxWidth: "400px",
  width: "100%",
  padding: "2rem",

  boxSizing: "border-box",
  color: "white",
  gridArea: "profileInfo",
}));

const OuterAvatar = styled(Box)(({ theme }) => ({
  ".edit": {
    position: "absolute",
    top: "15%",
    right: "15%",
    zIndex: "1",
    backgroundColor: theme.palette.primary.main,
    border: "2px solid" + theme.palette.secondary.main,
    height: "3rem",
    width: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    ":hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
export { InnerProfileInfo, OuterAvatar };
