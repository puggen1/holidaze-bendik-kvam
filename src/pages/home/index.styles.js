import { Box, styled } from "@mui/material";

const HomePage = styled(Box)(({ theme }) => ({
  ".ant-picker-range": {
    backgroundColor: "transparent !important",
    border: "none !important",
    width: "100% !important",
    padding: "0 !important",
    ".ant-picker-input": {
      backgroundColor: "white !important",
      padding: "15px 20px !important",
      borderRadius: "30px !important",
    },
    ".ant-picker-suffix": {
      display: "none !important",
    },
    ".ant-picker-input-active": {
      border: `1px solid ${theme.palette.primary.main} !important`,
    },
    ".ant-picker-focused": {
      border: `none !important`,
      boxShadow: `none !important`,
    },
    ".ant-picker-active-bar": {
      backgroundColor: `transparent !important`,
    },
    "@media (max-width: 550px)": {
      flexDirection: "column !important",
      gap: "1rem !important",
    },
  },
}));

export default HomePage;
