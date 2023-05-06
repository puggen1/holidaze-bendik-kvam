import { styled, Accordion } from "@mui/material";


const FilterAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "& .MuiAccordionDetails-root": {
        display:"grid",
        gridTemplateColumns:"20% 30% 30% 20%",
        padding:"2rem 0",
        width:"100%",
        height:"20vh",
        backgroundColor:theme.palette.primary.main,
    }
}));

export { FilterAccordion };