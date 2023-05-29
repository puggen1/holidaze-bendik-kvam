import { styled } from "@mui/material";
import { Box } from "@mui/system";

const OuterFilters = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "20% 30% 30% 20%",
  padding: "2rem 0",
  width: "100%",
  height: "25vh",
  backgroundColor: theme.palette.primary.main,
  ".filterRange": {
    flexDirection: "column",
    width: "50% !important",
    margin: "0 auto !important",
    justifyContent: "flex-end !important",
    gap: "1rem",
  },
  ".actions": {
    display: "flex",
    gridColumn: "4/5",
    padding: "1rem",
    justifyContent: "center",
    gap: "1rem",
  },
}));

const Ranges = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "2rem",
  justifyContent: "center",
  flexDirection: "column",
  "@media (max-width: 700px)": {
    padding: "0.5rem 1rem",
    boxSizing: "border-box",
  },
}));

const SortSearch = styled(Box)(({ theme }) => ({
  gridColumn: "4/5",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 700px)": {
    width: "100%",
    padding: "0.5rem 1rem",
    boxSizing: "border-box",
  },
}));
export { OuterFilters, Ranges, SortSearch };
