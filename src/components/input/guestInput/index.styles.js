import { styled } from "@mui/material";
import { StyledButton } from "../../Button/index.styles";
const GuestAmount = styled("p")(({ theme }) => ({
    fontSize: "1.5rem",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    minWidth: "50px",

    maxHeight: "50px",
    maxWidth: "50px",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    color: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  
}));

const GuestInputSection = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    justifyItems: "center",
    gap: "10px",

}));

const GuestButton = styled(StyledButton)(({ theme }) => ({
    fontSize: "1.5rem",
    height:"100%",
    width:"100%",
    maxHeight: "50px",
    maxWidth: "50px",
    minWidth: "50px",
    padding: "0",
    borderRadius: "50%",

}));
export { GuestAmount, GuestInputSection, GuestButton }