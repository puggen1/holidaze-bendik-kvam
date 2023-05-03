import { Box, styled } from "@mui/material";


const OuterCarousel = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    width:"700px",
    height:"350px",
    "& .bigImg":{
        objectFit:"cover",
        borderRadius:"20px",
        overflow:"hidden",
        height:"350px",
    },
    "& button":{
        display:"none"
    }
}));
const CarouselNavigation = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"20px",
    margin:"0 auto",
    "& img":{
        borderRadius:"20px",
        height:"120px",
        width:"120px",
        boxSize:"border-box",
       border:`solid 2px white`,

    },
    "& .active":{
        border:`solid 2px ${theme.palette.error.main}`
    }
}));


export { OuterCarousel, CarouselNavigation }