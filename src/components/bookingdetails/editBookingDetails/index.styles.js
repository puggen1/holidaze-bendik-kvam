import { Box, styled } from "@mui/material";

const InnerEditBooking = styled(Box)(({ theme, image }) => ({
  width: "45%",
  borderRadius: "20px",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  height: "300px",
  padding: "2rem",
  display: "flex",
  flexDirection: "row-reverse",
  gap: "1rem",
  ".ant-picker-range": {
    display: "none",
  },
  ".bookingCalendar ": {
    padding: "0",
    ".ant-picker-range-arrow": {
      display: "none",
    },
    ".ant-picker-panel-container": {
      margin: "0 auto 0 0 !important",
    },
  },
}));

export { InnerEditBooking };
