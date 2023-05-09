import { Box, styled } from "@mui/material";


const OuterCarousel = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    position:"relative",
    "& .bigImg":{
        objectFit:"cover",
        borderRadius:"20px",
        overflow:"hidden",
        height:"350px",
    },
    "& .icon":{
        position:"absolute",
        top:"30%",
        zIndex:1,
        backgroundColor:"rgba(255,255,255,0.5)",
        boxSizing:"border-box",
        borderRadius:"50%",
        color:theme.palette.primary.main,
    },
    "& .icon:hover":{
        cursor:"pointer",
        color:theme.palette.secondary.main,
    },
    "& .prev":{
        left:"2%",
    },
    "& .next":{
        right:"2%",
    },
    "& .carousel":{
        height:"350px",
    },    
    "@media (max-width: 950px)": {
        width:"100%",
        margin:"1rem auto",
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
    },
    "@media (max-width: 450px)": {
        width:"90%",
        margin:"auto",
        position:"absolute",
        "& .prev":{
            right: "unset",
            left:"10px",
            top:"35%",
        },
        "& .next":{
            right: "10px",
            left:"unset",
            top:"35%",
            bottom:"unset",
        },
    }
}));
const CarouselNavigation = styled(Box)(({ theme }) => ({
    display:"flex",
    flexWrap:"nowrap",
    gap:"6.25%",
    margin:"20px auto",
    overflow:"hidden",
    height:"auto",

    "& img":{
        borderRadius:"20px",
        top: 0,
        left: 0,
        height:"100%",
        width:"15%",
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
    "@media (max-width: 950px)": {
        position:"absolute",
        right:"5%",
        flexDirection:"column",
        width:"auto",
        height:"100%",
        boxSizing:"border-box",
        justifyContent:"center",
        padding:"5% 0",
        gap:"7.5%",
        margin:"auto",
        "& img":{
            border:"none",
            height:"25%",
            width:"100%",
            objectFit:"cover"
        }
    },
    "@media (max-width: 450px)": {
        position:"unset",
        flexDirection:"row",
        flexWrap:"nowrap",
        width:"100%",
        maxWidth:"100%",
        height:"auto",
        justifyContent:"center",
        margin:"10px auto",
        boxSizing:"border-box",
        gap:"5%",
        "& img":{
            border:"none",
            height:"100%",
            width:"20%",
        }
    }
}));


export { OuterCarousel, CarouselNavigation }