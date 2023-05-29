import { Box, styled } from "@mui/material";

const OuterPanelHome = styled(Box)(({ theme }) => ({
  border: `solid 1px ${theme.palette.secondary.main} !important`,
  borderRadius: "20px !important",
  ".ant-picker-panel": {
    ".ant-picker-header": {
      borderBottom: `solid 1px ${theme.palette.secondary.main} !important`,
    },
    ".ant-picker-cell-range-start, .ant-picker-cell-range-end": {
      ".ant-picker-cell-inner": {
        backgroundColor: "#4189CC !important",
        borderRadius: "50% !important",
      },
    },
    ".ant-picker-cell-in-range::before,.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before, .ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before, .ant-picker-cell-today div":
      {
        backgroundColor: "#8BC5FB !important",
      },
    ".ant-picker-cell-today div,  .ant-picker-cell-today div::before": {
      borderRadius: "50% !important",
    },
    ".ant-picker-cell-disabled, .ant-picker-cell-disabled::before": {
      backgroundColor: "transparent !important",
    },
    ".ant-picker-cell-disabled div": {
      backgroundColor: "#CC6238 !important",
      color: "white",
      borderRadius: "50% !important",
    },
    /* taken from https://stackoverflow.com/questions/60091618/react-daterangepicker-mobile-friendly */
    "&:last-child": {
      ".ant-picker-header": {
        right: 0,
        ".ant-picker-header-prev-btn, .ant-picker-header-view": {},
      },
      "@media (max-width: 1300px)": {
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
}));

export { OuterPanelHome };
