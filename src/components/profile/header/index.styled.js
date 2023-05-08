import { styled } from "@mui/material";

const OuterProfileHeader = styled("div")(({ theme }) => ({
  width: "20%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
  boxSizing: "border-box",
  padding: "1rem",
  "div :hover": {
    cursor: "pointer",
  },
}));

export { OuterProfileHeader };
