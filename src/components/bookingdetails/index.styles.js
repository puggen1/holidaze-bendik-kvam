import { Box, styled } from "@mui/material";

const InnerBooking = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  borderRadius: "20px",
  padding: "2rem",
  height: "300px",
  width: "45%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export { InnerBooking };
