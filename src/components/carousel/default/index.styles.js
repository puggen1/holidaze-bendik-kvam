import { Box, styled } from "@mui/material";


const OuterCarousel = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    width:"700px",
    position:"relative",
    "& .bigImg":{
        objectFit:"cover",
        borderRadius:"20px",
        overflow:"hidden",
        height:"350px",
    },
    "& .icon":{
        color:"white",
        position:"absolute",
        top:"30%",
        zIndex:1,
    },
    "& .icon:hover":{
        cursor:"pointer",
        color:theme.palette.primary.main,
    },
    "& .prev":{
        left:"0px",
    },
    "& .next":{
        right:"0px",
    },
    "& .carousel":{
        height:"350px",
    },
    "@media (max-width: 850px)": {
        width:"90%",
        margin:"auto",
        position:"absolute",
        "& .prev":{
            right: "50px",
            left:"unset",
            top:"5px",
        },
        "& .next":{
            right: "50px",
            top:"unset",
            bottom:"5px",
        },
        "& .next, & .prev":{
            backgroundColor:"rgba(255,255,255,0.5)",
            boxSizing:"border-box",
            borderRadius:"50%",
            color:theme.palette.primary.main,
        },
    }
}));
const CarouselNavigation = styled(Box)(({ theme }) => ({
    display:"flex",
    flexWrap:"wrap",
    gap:"20px",
    margin:"20px auto",
    overflow:"hidden",
    height:"120px",

    "& img":{
        borderRadius:"20px",
        top: 0,
        left: 0,
        height:"120px",
        width:"120px",
        boxSizing:"border-box",
        opacity:0,
       border:`solid 2px white`,

    },
    "& .active":{
        border:`solid 2px ${theme.palette.error.main}`
    },
    "& .show":{
        opacity:1,
    },
    "@media (max-width: 850px)": {
        position:"absolute",
        right:"5px",
        flexDirection:"column",
        width:"120px",
        height:"350px",
        boxSizing:"border-box",
        justifyContent:"center",
        margin:"auto",
        "& img":{
            border:"none",
        }
    }
}));


export { OuterCarousel, CarouselNavigation }