import { Typography, styled } from "@mui/material";
import { StyledButton } from "../../Button/index.styles";
const GuestAmount = styled(Typography)(({ theme }) => ({
    fontSize: "1.5rem",
    borderRadius: "20px",
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
    gridTemplateColumns: "30px 50px 30px",
    gridTemplateRows: "50px",
    justifyContent: "space-between",
    boxSizing: "border-box",
    alignItems: "center",
    justifyItems: "center",
    gap: "10px",

}));

const GuestButton = styled(StyledButton)(({ theme }) => ({
    fontSize: "1.5rem",
    height:"30px",
    width:"30px",
    maxHeight: "30px",
    maxWidth: "30px",
    minWidth: "30px",
    padding: "0",
    borderRadius: "50%",
}));
export { GuestAmount, GuestInputSection, GuestButton }