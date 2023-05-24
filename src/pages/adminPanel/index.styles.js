import { Box, styled } from "@mui/material";


const OuterDashboard = styled(Box)(({ theme }) => ({
    width:"90%",
    margin:"0 auto",
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    padding:"2rem 0",
}));


export {OuterDashboard}