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
        },

        thumb: {
            backgroundColor: "white",
            position: "absolute",
            height: "10px",
            width: "10px",
            left: "14px",
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
}
});

export { theme };
