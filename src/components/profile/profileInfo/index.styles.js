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

export { InnerProfileInfo };
