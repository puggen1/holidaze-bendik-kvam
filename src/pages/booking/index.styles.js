import { styled, Box } from "@mui/material";

const OuterBooking = styled(Box)(({ theme, image }) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  minHeight: "90vh",
  minWidth: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  boxSizing: "border-box",
  padding: "0 8rem",
  gap: "2rem",
}));

export { OuterBooking };
