import { styled, Box } from "@mui/material";

const OuterVenue = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "1rem auto",
  display: "flex",
  gap: "2rem",
}));

const InnerVenue = styled(Box)(({ theme }) => ({
  width: "40%",
}));

const InnerBooking = styled(Box)(({ theme }) => ({
  position: "fixed",
  left: "40%",
  margin: "auto auto",
  width: "60%",
}));
export { OuterVenue, InnerVenue, InnerBooking };
