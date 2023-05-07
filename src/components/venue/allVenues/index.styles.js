import {styled, Box } from "@mui/material"


const OuterAllVenues = styled(Box)(({ theme }) => ({
    width:"100%",
    margin:"2rem auto",
    boxSizing:"border-box",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    gap:"1rem",

    "@media screen and (max-width: 716px)": {
        flexDirection:"column",
    }
}));



export {OuterAllVenues}