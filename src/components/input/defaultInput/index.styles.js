import { TextField, styled } from "@mui/material";


const StyledInput = styled(TextField)(({ theme, color, variant, range }) => ({
    borderColor: color ? theme.palette[color].main : "white",
    width: range ?  "75px" : "100%",
    textAlign: range ? "center" : "left",
    "& div":{
        borderRadius: range ? "15px": "50px",
    },
    "& fieldset":{
        borderColor: color ?  theme.palette[color].main : "white",
        borderWidth: "1px",
        
    },
    "& input":{
        backgroundColor: "white",
        borderRadius: range ? "15px": "50px",
        padding: range ? "5px 0px" : "15px 25px",
        textAlign: range ? "center" : "left",
    }
}));


export { StyledInput }