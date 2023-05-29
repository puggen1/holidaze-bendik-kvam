import { Box,styled } from "@mui/material";

const InnerHeader = styled(Box)(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    display:"flex",
    height:"10vh",
    alignItems:"center",
    "& .logo":{
        margin:"auto auto",
        height:"60%",
        display:"block",
        width:"auto",
        img:{
            height:"100%",
            width:"100%"
        }
    }
}))

export {InnerHeader}