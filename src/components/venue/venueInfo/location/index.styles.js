import { Box, styled } from "@mui/material";
const OuterLocation = styled(Box)(({ theme }) => ({
  margin: "2rem 0 1rem 0",
  height: "250px",
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  "@media (max-width: 591px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr auto",
    height: "auto",
  },
}));

const LocationInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 591px)": {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "1rem",
    gap: "1rem",
  },
}));
export { OuterLocation, LocationInfo };
