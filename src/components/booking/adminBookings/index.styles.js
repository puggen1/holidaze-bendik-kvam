import { Box, styled } from "@mui/material";


const OuterAdminBooking = styled(Box)(({ theme }) => ({
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    gridTemplateRows:"auto auto 1fr",
    gap:"1rem 0",
    gridColumn:"2/4",
    gridRow:"2/4",
}));

const AdminBookingCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height:"2rem",
    borderRadius:"30px",
    padding:"1rem",
    color:"white",
    gridColumn:"1/4",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    "@media (max-width: 768px)": {
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        gridTemplateRows:"auto auto",
        height:"auto",
        gap:"0.5rem 0",
        ".date":{
            gridColumn:"1/3",
        },
        ".price":{
            gridColumn:"3/4",
            gridRow:"2/3",
        },
        ".guests":{
            gridColumn:"3/4",
        },
    },

}));
export {OuterAdminBooking, AdminBookingCard}