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
  "@media (max-width: 1400px)": {
    minHeight:"400px",
    height:"auto",
    
  },
  "@media (max-width: 1024px)": {
    width: "75%",
    height: "auto",
    minHeight: "300px",
    margin: "1rem auto",
    boxSizing: "border-box",

  },
  "@media (max-width: 840px)": {
    width: "90%",

  },
  "@media (max-width: 600px)": {
    width: "100%",
    minHeight: "400px",
    minWidth: "100%",
    maxWidth: "100%",
  },
  "@media (max-width: 425px)": {
    borderRadius: "0",
    padding: "1rem",

  },
}));

export { InnerBooking };
