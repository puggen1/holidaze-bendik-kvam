import { styled } from "@mui/material";



const RangeDiv = styled("div")(({ theme, color, variant }) => ({
    display:"grid",
    gridTemplateColumns:"0.5fr 1fr 0.5fr",
    alignItems:"center",
    justifyItems:"center",
    gap:"20px",
}));


export {RangeDiv}