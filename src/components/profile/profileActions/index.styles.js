import { styled, Box } from "@mui/material";


const OuterActions = styled(Box)(({
    gridArea:"profileActions",
    margin:"0rem auto",
    display:"flex",
    gap:"2rem",
    justifyContent:"center",
    "@media screen and (max-width: 480px)":{
        flexDirection:"column",
        width:"75%"
    }
}))



export {OuterActions}