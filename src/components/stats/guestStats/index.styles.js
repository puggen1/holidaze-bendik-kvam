import { Box, styled } from "@mui/material";
const OuterGuestStats = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  padding: "2rem",
  gridColumn: "1 / 2",
}));

export { OuterGuestStats };
