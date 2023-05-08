import { styled, Box } from "@mui/material";
const IconBox = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"10px 0px",
    flexWrap:"wrap",
    flexDirection:"row",
    alignItems:"center",
    "& svg":{
        color:"white",
        padding:"5px",
        width:"30px",
        height:"30px",
        borderRadius:"10px",
        backgroundColor: theme.palette.primary.main,
    },
}));



export {IconBox}