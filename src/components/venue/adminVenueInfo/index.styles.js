import { Box, styled } from "@mui/material";


const OuterVenueInfo = styled(Box)(({ theme }) => ({
    padding:"2rem",
    gridColumn:"2/4" ,
    "@media (max-width: 1300px)": {
        gridColumn:"1/2",
        gridRow:"3/4",
        padding:"0.5rem",
    },
    "@media (max-width: 768px)": {
        ".aroundInfo":{
            padding:"0.2rem !important",
            ".ant-card-body":{
                padding:"0.2rem !important",

            }
        },
    },
  
}));

const InnerVenueInfo = styled(Box)(({theme})=>({
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gap:"2rem 0",
    "@media screen and (max-width: 768px)":{
        display:"flex",
        flexDirection:"column",
      
    }
}))
const OuterStats = styled(Box)(({theme})=>({
    gridColumn:"1/2",
    "@media screen and (max-width: 768px)":{
        display:"flex",
        flexDirection:"column",
        margin:"0 auto",
       
    }

}))
export {OuterVenueInfo, InnerVenueInfo, OuterStats}