import { Box, styled } from "@mui/material";

const OuterRevenueStats = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
  gridColumn: "3 / 4",
  gridRow: "2 / 3",
}));

export { OuterRevenueStats };
