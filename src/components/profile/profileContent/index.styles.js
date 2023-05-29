import { Box, styled } from "@mui/material";

const OuterContent = styled(Box)({
  gridArea: "profileContent",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  "@media screen and (max-width:750px)": {
    width: "100%",
  },
  ".profileVenue": {
    ".venueCard": {
      margin: "0 0",
    },
    "@media screen and (max-width:1351px)": {
      gap: "1rem",
      ".venueCard": {
        maxWidth: "50% !important",
        margin: "0 auto",
      },
    },
    "@media screen and (max-width:425px)": {
      ".venueCard": {
        maxWidth: "100% !important",
        width: "100%",
        minWidth: "unset",
      },
    },
  },
});

export { OuterContent };
