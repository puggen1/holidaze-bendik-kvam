import { styled } from "@mui/material";


const Footer = styled("footer")(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    minHeight:"10vh",
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gridTemplateRows:"auto auto",
    justifyContent:"center",
     alignItems:"center",
     ".footerName":{
        textAlign:"center",

     },
     "@media screen and (max-width: 500px)": {
        gridTemplateColumns:"1fr 1fr",
        ".footerName":{
            gridRow:"2/3",
            gridColumn:"1/3",
            marginTop:"1rem",
        },
        ".footerContact":{

            gridColumn:"1/2",
        },
     },
     "@media screen and (max-width: 426px)": {
        gridTemplateColumns:"1fr",
        padding:"1rem",
        ".footerName":{
            gridRow:"3/4",
        },
        ".adress":{
            gridRow:"2/3",
            padding:"1rem",
        },
        ".footerContact":{
            textAlign:"center",
            display:"flex",
            flexWrap:"wrap",
            gap:"1rem",
            justifyContent:"space-evenly",
        },
     },
}));


export {Footer};