import { CardContent, styled, Card, CardMedia } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
const VenueCard = styled(Card)(({ theme }) => ({
  width: "350px",
  minWidth: "350px",
  height: "250px",
  position: "relative",
  borderRadius: "10px",
  margin: "0 auto",
  "& .guests": {
    opacity: 0,
    transition: "opacity 1s ease",
    marginTop: "auto",
    flex: "100% 0 0",
    textAlign: "start",
  },
  "& .icons": {
    opacity: 0,
    transition: "opacity 1s ease",
  },
  "& a": {
    opacity: 0,
    alignSelf: "flex-end",
    bottom: "0px",
    transition: "opacity 1s ease",
    margin: "auto 0 0 auto",
    fontWeight: 300,
  },
  "&:hover .content": {
    height: "100%",
  },
  "&:hover .guests, &:hover a": {
    opacity: 1,
  },
  "&:hover .icons": {
    opacity: 0.75,
  },

  "@media (max-width: 716px)": {
    width: "75%",
    margin: "1rem auto",
  },
  "@media (max-width: 501px)": {
    minWidth: "unset",
  },
}));
const VenueCardMedia = styled(CardMedia)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",

  top: 0,
  right: 0,
}));
const VenueCardContent = styled(CardContent)(({ theme }) => ({
  boxSizing: "border-box",
  overflow: "hidden",
  padding: "1em",
  zIndex: 1,
  flex: 1,
  position: "absolute",
  color: "white",
  bottom: "0px",
  height: "25%",
  width: "100%",
  backgroundColor: "rgba(0,0,0,0.6  )",
  transition: "height 0.5s ease",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  "& .top": {
    display: "flex",
    flexDirection: "row",
    gap: "10px 0",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "wrap",
    "& h3": {
      fontWeight: 300,
      whiteSpace: "break-spaces",
      width: "60%",
    },
    "& .price": {
      width: "40%",
      textAlign: "end",
      fontWeight: 300,
    },
    "& .icons": {
      display: "flex",
      gap: "0 10px",
      flex: "100% 0 0",
    },
  },
}));

export { VenueCard, VenueCardMedia, VenueCardContent };
