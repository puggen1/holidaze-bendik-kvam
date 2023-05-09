import { styled, Box } from "@mui/material";

const OuterVenue = styled(Box)(({ theme }) => ({
  width: "90%",
  margin: "1rem auto",
  display: "flex",
  gap: "2rem",
  "@media (max-width: 950px)": {
    flexDirection: "column",
    width: "80%",
  },
  "@media (max-width: 591px)": {
    width: "100%",
  },
}));

const InnerVenue = styled(Box)(({ theme }) => ({
  width: "60%",
  maxWidth: "850px",
  "@media (max-width: 1500px)": {
    maxWidth: "600px",
  },
  "@media (max-width: 950px)": {
    width: "100%",
    maxWidth: "100%",
  },
}));

const InnerBooking = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: "0",
  minWidth: "577px",
  margin: "auto auto",
  width: "40%",
  "@media (max-width: 1400px)": {
    width: "50%",
  },
  "@media (max-width: 1300px)": {
    maxWidth: "288px !important",
    minWidth: "288px !important",
    right: "2rem",
  },
  "@media (max-width: 950px)": {
    position: "relative",
    maxWidth: "100% !important",
    width: "100% !important",
    right: "0",
  },
}));
export { OuterVenue, InnerVenue, InnerBooking };
