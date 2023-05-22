import { Box, styled } from "@mui/material";

const OuterContent = styled(Box)(({
    gridArea:"profileContent",
    display:"flex",
     flexDirection:"column",
     gap:"2rem",
     "@media screen and (max-width:750px)":{
        width:"100%"
     },
    
}))


export {OuterContent}