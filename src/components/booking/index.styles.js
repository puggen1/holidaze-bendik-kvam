import { Box, styled } from "@mui/material";



const Guests = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"10px",
    alignItems:"center",
}));

const OuterBooking = styled(Box)(({ theme }) => ({
    maxWidth:"577px",
     margin:"0 auto",
    display:"flex",
    flexDirection:"column-reverse",
    "@media (max-width: 1400px)":{
        margin:"auto auto auto auto"
    },
    "@media (max-width: 950px)":{
            flexDirection:"row",
            flexWrap:"nowrap",
            maxWidth:"100%"
    },


}));

const LowerBooking = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"10px",
    justifyContent:"space-between",
    "@media (max-width: 1300px)":{
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        "& .reset":{
            gridColumn:"3/4 !important",
            gridRow:"2/3 !important",
        },
        "& .guest":{
            gridColumn:"1/4 !important",
            margin:"auto 0 auto auto"
        
        },
        ".book":{
                gridColumn:"1/2 !important",
                gridRow:"2/3 !important",

            
        }
    },
    "@media screen and (max-width: 950px)":{
        gridTemplateColumns:"1fr",
        "& .guest":{
            gridColumn:"1/2",
            gridRow:"1/2"
        },
        "& .reset":{
            gridColumn:"1/2",
            gridRow:"2/3"
        },
        "& .book":{
            gridColumn:"1/2",
            gridRow:"3/4"
        }
    }

}));
export {Guests, OuterBooking, LowerBooking}