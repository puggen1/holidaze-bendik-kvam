import { Box, styled } from "@mui/material";
const OuterCard = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateAreas: `"title guests" "fromto ." "price action"`,
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px",
  color: "white",
  padding: "1rem",
}));
const Guests = styled(Box)(({ theme }) => ({
  gridArea: "guests",
  backgroundColor: "white",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "5px",
  color: theme.palette.primary.main,
  borderRadius: "10px",
}));
export { OuterCard, Guests };
