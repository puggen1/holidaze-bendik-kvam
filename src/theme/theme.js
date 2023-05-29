import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#1D2B38",
    },
    secondary: {
      main: "#4189CC",
    },
    error: {
      main: "#CC6238",
    },
    info: {
      main: "#8BC5FB",
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          height: "40px",
          width: "60px",
        },
       track: {
          width:"100%",
          height:"100%",
          borderRadius:"50px",
          opacity: "1 !important",
          backgroundColor: "#1D2B38",
          boxSizing: "border-box",
        },

        thumb: {
            backgroundColor: "white",
            position: "absolute",
            height: "10px",
            width: "10px",
            left: "14px",
            margin:"3px 0 3px 0"
          },
        switchBase: {
          height:"100%",
          width:"100%",
        },
}},MuiSlider:{
  styleOverrides:{
    root:{
    },
    thumb:{
      backgroundColor: "white",
      border: "5px solid #4189CC",
    },
    track:{
      backgroundColor: "#4189CC !important",
      color: "#4189CC !important",
    },
    rail:{
      color: "#4189CC !important",
    }
  }
  
  
},
MuiAccordion:{
  styleOverrides:{
    root:{
      display:"flex",
      flexDirection:"column-reverse !important",
      "&.Mui-expanded":{
        margin: "0 !important",        
      },
    },
  },
},
MuiAccordionSummary:{
  styleOverrides:{
    root:{
      flexDirection:"column !important",
    }
  },
}
}
});

const antDTheme = {
  token: {
    colorPrimary: '#1D2B38',
    colorError: "#CC6238",
    colorInfo:"#4189CC"
  },
}

export { theme, antDTheme };
