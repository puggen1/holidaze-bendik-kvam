import { styled } from "@mui/material";


const OuterVenueList = styled("div")(({ theme }) => ({
    display:"flex",
    flexDirection:"column",

    justifyContent:"flex-start",
    gridColumn:"1/2",
    padding:"2rem",
    gap:"1rem",
    "@media (max-width: 1300px)": {
        gridColumn:"1/2",
        flexDirection:"row",
        flexWrap:"nowrap",
        overflow:"auto",
        whiteSpace:"nowrap"
    },
}));


export {OuterVenueList}