import { Box, styled } from "@mui/material";

const InnerInfo = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "1fr auto auto",
  gap: "1rem",
  ".name": {
    gridColumn: "1 / 4",
    gridRow: "1 / 2",
  },
  ".host": {
    gridColumn: "4/6",
    display: "flex",
    gridRow: "1 / 2",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    color: theme.palette.primary.main,
  },
  ".desc": {
    gridColumn: "1 / 6",
    gridRow: "3 / 4",
  },
  ".icons": {
    gridColumn: "1 / 3",
    gridRow: "2 / 3",
    gap: "1rem ",
  },
  ".guests": {
    gridColumn: "5 / 6",
    gridRow: "2 / 3",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".price": {
    gridRow: "2 / 3",
    gridColumn: "3 / 5",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { InnerInfo };
