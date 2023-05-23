import { Box, styled } from "@mui/material";

const InnerProfileInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px",
  maxWidth: "400px",
  width: "100%",
  padding: "2rem",
  boxSizing: "border-box",
  color: "white",
  gridArea: "profileInfo",
}));

const OuterAvatar = styled(Box)(({ theme }) => ({
  position:"relative",
  ".edit": {
    position: "absolute",
    top: "5%",
    right: "5%",
    zIndex: "1",
    backgroundColor: theme.palette.primary.main,
    border: "2px solid" + theme.palette.secondary.main,
    height: "3rem",
    width: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    ":hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.secondary.main,
    },
    
  },
  "@media screen and (max-width: 480px)":{
      ".edit":{
        height:"2rem",
        width:"2rem"
      }
  },
}));
export { InnerProfileInfo, OuterAvatar };
