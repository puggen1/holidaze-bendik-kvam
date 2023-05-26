import { Box, styled } from "@mui/material";


const OuterDashboard = styled(Box)(({ theme }) => ({
    width:"90%",
    margin:"0 auto",
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    padding:"2rem 0",
    gap:"1rem 0",
    ".allAdminVenues": {
        flexWrap:"nowrap",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        overflow:"auto",
        whiteSpace:"nowrap",
        },
    ".venues": {
        maxWidth:"100%",
        
    },

   "@media (max-width: 768px)": {
   
        gridTemplateColumns:"1fr 2fr",
        ".chart": {
            gridColumn:"2/3",
        },
        ".revenueStats": {
            gridColumn:"2/3",
            gridRow:"3/4",
        },
        ".guestStats": {
            gridColumn:"1/2",
            gridRow:"2/4",

        },
        ".venues": {
            gridColumn:"1/3",
            gridRow:"4/5",
            boxSizing:"border-box",
            overflow:"auto",
                    },
       
         
   },
"@media (max-width: 580px)": {
    gridTemplateColumns:"1fr",
    ".chart": {
        gridColumn:"1/2",
        gridRow:"3/4",},
    ".revenueStats": {
        gridColumn:"1/2",
        gridRow:"4/5",
    },
    ".guestStats": {
        gridColumn:"1/2",
        gridRow:"5/6",
    },
    ".venues": {
        gridColumn:"1/2",
        gridRow:"6/7",
        ".topButtons": {
            justifyContent:"center !important",},
    },
    "h1": {
        gridColumn:"1/2",
        gridRow:"2/3",
    },
},
}));


export {OuterDashboard}