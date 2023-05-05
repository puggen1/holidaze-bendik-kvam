import { Switch, styled} from "@mui/material";

const IconSwitcher = styled(Switch)(({ theme, color, variant, outlined }) => ({
    "& .MuiSwitch-track": {
        border: `solid 1px ${outlined ? theme.palette.secondary.main : theme.palette.primary.main}` ,
    }
}))


const SwitchDiv = styled("div")(({ theme, color, variant }) => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",

}));



export {SwitchDiv,  IconSwitcher}