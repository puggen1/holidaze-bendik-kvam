import { TextField, styled } from "@mui/material";


const StyledInput = styled(TextField)(({ theme, color, variant }) => ({
    borderColor: theme.palette[color].main,
    "& div":{
        borderRadius: "50px",
    },
    "& fieldset":{
        borderColor: theme.palette[color].main,
        borderWidth: "1px"
    },
}));


export { StyledInput }