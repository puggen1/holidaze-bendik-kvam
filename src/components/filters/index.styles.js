import { styled } from "@mui/material";
import { Box } from "@mui/system";

const OuterFilters = styled(Box)(({ theme }) => ({
display:"grid",
gridTemplateColumns:"20% 30% 30% 20%",
padding:"2rem 0",
width:"100%",
height:"20vh",
backgroundColor:theme.palette.primary.main,

}));

const Ranges = styled(Box)(({ theme }) => ({
    width:"100%",
    display:"flex",
    gap:"2rem",
    justifyContent:"center",
    flexDirection:"column",
}));

const SortSearch = styled(Box)(({ theme }) => ({
    gridColumn:"4/5",
    width:"90%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
}));
export {OuterFilters, Ranges, SortSearch}