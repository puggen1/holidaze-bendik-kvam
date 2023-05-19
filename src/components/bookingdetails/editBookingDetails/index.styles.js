import { Box, styled } from "@mui/material";

const InnerEditBooking = styled(Box)(({ theme, image }) => ({
  width: "45%",
  borderRadius: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  height: "300px",
  padding: "2rem",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  gap: "1rem",
  ".ant-picker-range": {
    display: "none",
  },
  ".bookingCalendar ": {
    flex: "1",
    padding: "0",
    ".ant-picker-range-arrow": {
      display: "none",
    },
    ".ant-picker-panel-container": {
      margin: "0 auto 0 0 !important",
    },
    ".ant-picker-panel":{
      "&:last-child": {
        
          position: "absolute",
          visibility: "hidden !important",
          ".ant-picker-header": {
            right: "0px",
            position: "relative",
            ".ant-picker-header-prev-btn, .ant-picker-header-view": {
              visibility: "hidden !important",
            },
            ".ant-picker-header-next-btn, .ant-picker-header-super-next-btn": {
              visibility: "visible !important",
            },
          },
          ".ant-picker-body": {
            display: "block",
        },
      },
    },
    
  },
  "@media (max-width: 1400px)": {
    width: "55%",
    minHeight:"400px",
    height:"auto",
    flexDirection: "column-reverse",
  },
  "@media (max-width: 1024px)": {
    width: "75%",
    height: "auto",
    minHeight: "300px",
    margin: "1rem auto",
    flexDirection: "row-reverse",
  },
  "@media (max-width: 840px)": {
    width: "90%",
  },
  "@media (max-width: 768px)": {
    flexDirection: "column-reverse",
    boxSizing: "border-box",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    minHeight: "400px",

    minWidth: "100%",
    maxWidth: "100%",
    alignItems: "center",
  },
  "@media (max-width: 425px)": {
    borderRadius: "0",
    padding: "1rem",
  },
}));

export { InnerEditBooking };
