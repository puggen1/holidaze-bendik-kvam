import { CardContent, styled, Card, CardMedia } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const VenueCard = styled(Card)(({theme})=>({
    width:"350px",
    height:"250px",
    position:"relative",
    borderRadius:"10px",
    '& .guests':{
        opacity:0,
        transition: "opacity 1s ease",
        maxWidth:"40%",
        marginTop:"auto",
        flex:"100% 0 0",
        textAlign:"start",
    },
    '& .icons':{
        opacity:0,
        transition: "opacity 1s ease",

    },
    '& a':{
        opacity:0,
        alignSelf: "flex-end",
        bottom:"0px",
        transition: "opacity 1s ease",
        margin:"auto 0 0 auto",
        fontWeight:300,
    },
    '&:hover .content': {
        height: "100%",
    },
    '&:hover .guests, &:hover a':{
        opacity:1,
    },
    "&:hover .icons":{
        opacity:0.75,
    }
}));
const VenueCardMedia = styled(CardMedia)(({theme})=>({
    position: "absolute",
        height: "100%",
        width: "100%",
      
        top:0,
        right:0
        
}))
const VenueCardContent = styled(CardContent)(({theme})=>({
    boxSizing:"border-box",
    overflow:"hidden",
    padding:"1em",
    zIndex:1,
    flex:1,
    position: "absolute",
    color:"white",
    bottom:"0px",
    height:"25%",
    width:"100%",
    backgroundColor:"rgba(0,0,0,0.6  )",
    transition: "height 0.5s ease",
    display: "flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
    alignItems:"flex-start",
    '& .top':{
        display:"flex",
        flexDirection:"row",
        gap:"10px 0",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        flexWrap:"wrap",
        '& h3':{
            flex:"70% 0 0",
            fontWeight:300,
        },
        '& .price':{
            flex:"0 0 30%",
            textAlign:"end",
            fontWeight:300,

        },
        '& .icons':{
            flex:"100% 0 0",
        }
    }
}))

export {VenueCard, VenueCardMedia, VenueCardContent}