import {
  styled,
  Accordion,
  AccordionDetails as MuiAccordionDetails,
} from "@mui/material";

const FilterAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0 !important",
  color: "white",
  "& .MuiAccordionDetails-root": {
    display: "grid",
    gridTemplateColumns: "20% 30% 30% 20%",
    padding: "2rem 0",
    width: "100%",
    minHeight: "20vh",
    backgroundColor: theme.palette.primary.main,
    "@media (max-width: 700px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  ".actions": {
    width: "100%",
    padding: "0.5rem 1rem",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

export { FilterAccordion, AccordionDetails };
