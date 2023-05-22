import { Box, styled } from "@mui/material";

const OuterUser = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gridTemplateAreas: `"profileInfo profileContent" "profileActions profileContent"`,
  gridTemplateRows: "500px auto",
  alignItems: "start",
  gap: "2rem",
  width: "66%",
  margin: "4rem auto 1rem auto",
  ".venueCard":{
    maxWidth:"45% !important",
    width:"45% !important"
  },
  "@media screen and (max-width: 1440px)":{
    width:"80%",
   
  },
  "@media screen and (max-width: 1350px)":{
    ".venueCard":{
      maxWidth:"100% !important",
      width:"100% !important"
    },
  },
  "@media screen and (max-width: 1024px)":{
    width:"100%",
    maxWidth:"100%",
    padding:"1rem",
    gridTemplateColumns:"1fr 1.5fr",
    boxSizing:"border-box",
  
  },
  "@media screen and (max-width: 750px)":{
    gridTemplateColumns:"1fr",
    gridTemplateAreas:`"profileInfo" "profileActions" "profileContent"`,
    justifyItems:"center",
    ".venueCard":{
      maxWidth:"300px !important",
      width:"100% !important",
    }
  },
  "@media screen and (max-width: 650px)":{
    ".venueCard":{
      maxWidth:"350px !important",
      width:"100% !important",
    }
  },
  
  "@media screen and (max-width: 480px)":{
        gridTemplateRows:"auto auto auto",
        marginBottom:"4rem",
        ".venueCard":{
          maxWidth:"100% !important",
          width:"100% !important",
        },
        ".MuiAvatar-circular":{
          width:"150px !important",
          height:"150px !important",
        },
  },


}));

export { OuterUser };
