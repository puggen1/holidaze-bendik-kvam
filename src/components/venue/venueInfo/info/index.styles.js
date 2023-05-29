import { Box, styled } from "@mui/material";

const InnerInfo = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "1fr auto auto",
  gridTemplateAreas: `"name name name host host" "icons icons price price guests" "desc desc desc desc desc"`,
  gap: "1rem",
  ".name": {
    gridArea: "name",
  },
  ".host": {
    gridArea: "host",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    color: theme.palette.primary.main,
  },
  ".desc": {
    gridArea: "desc",
  },
  ".icons": {
    gridArea: "icons",
    gap: "1rem ",
  },
  ".guests": {
    gridArea: "guests",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".price": {
    gridArea: "price",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media screen and (max-width: 1250px)": {
    gridTemplateAreas: `"name name name name name" "icons icons icons host host" "price price price guests guests" "desc desc desc desc desc"`,
  },
  "@media (max-width: 591px)": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    ".name": {
      flex: "1 1 70%",
    },
    ".host": {
      flex: "1 1 30%",
    },
    ".icons": {
      flex: "1 1 100%",
      justifyContent: "flex-start",
    },
    ".guests": {
      flex: "1 1 auto",
    },
    ".price": {
      flex: "1 1 auto",
    },
    ".desc": {
      flex: "1 1 100%",
    },
  },
}));

export { InnerInfo };
