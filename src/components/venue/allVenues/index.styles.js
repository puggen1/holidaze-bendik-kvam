import { styled, Box } from "@mui/material";

const OuterAllVenues = styled(Box)(({ theme }) => ({
  margin: "2rem auto",
  width: "auto",
  boxSizing: "border-box",
  display: "grid",
  //auto columns
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  flexWrap: "wrap",
  gap: "1rem",
  "@media screen and (max-width: 716px)": {
    flexDirection: "column",
  },
  "@media screen and (max-width: 350px)": {
    gridTemplateColumns: "1fr",
    boxSizing: "border-box",
    maxWidth: "100%",
  },
}));

export { OuterAllVenues };
