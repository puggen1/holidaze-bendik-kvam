import { styled } from "@mui/system";

import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme, color, variant}) => ({
    backgroundColor: variant === "contained" ? theme.palette[color].main : "inherit",
    border: `2px solid ${theme.palette[color].main}`,
    color: variant === "contained" ? "white" : theme.palette[color].main,
    borderRadius: "20px",
    padding: "5px 16px !important",
    boxSizing: "border-box",
    "&.MuiButton-root:hover":{
        border: `2px solid ${theme.palette[color].main}`,
        color: variant === "contained" ?  theme.palette[color].main : "white",
        backgroundColor: variant === "contained" ? "transparent" : theme.palette[color].main,
}}));

    


export { StyledButton }