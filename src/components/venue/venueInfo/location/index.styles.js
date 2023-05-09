import { Box, styled } from "@mui/material";
const OuterLocation = styled(Box)(({ theme }) => ({
  margin: "2rem 0 1rem 0",
  height: "250px",
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
}));

const LocationInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export { OuterLocation, LocationInfo };
