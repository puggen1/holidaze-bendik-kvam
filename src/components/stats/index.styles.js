import { Box, styled } from "@mui/material";


const StatCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding:"1rem",
    borderRadius:"30px",
    "& div":{
        color:"white !important"
    },
    "& .ant-statistic":{
        display:"flex !important",
        flexDirection:"column !important",
        justifyContent:"center !important",
        textAlign:"center !important",
    },

}));

export {StatCard}