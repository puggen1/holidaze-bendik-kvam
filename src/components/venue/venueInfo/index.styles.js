import { styled, Box } from "@mui/material";

const OuterInfo = styled(Box)(({ theme }) => ({
  boxShadow: "0px 0px 5px 1px rgba(29, 43, 56, 0.5)",
  borderRadius: "20px",
  padding: "1rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "@media (max-width: 591px)": {
    boxShadow: "none",
    width: "100%",
  },
}));

export { OuterInfo };
