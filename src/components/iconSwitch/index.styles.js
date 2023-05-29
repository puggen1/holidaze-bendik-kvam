import { Switch, styled } from "@mui/material";

const IconSwitcher = styled(Switch)(({ theme, color, variant, outlined }) => ({
  justifyContent: "center",
  boxSizing: "border-box",
  "& .MuiSwitch-track": {
    border: `solid 1px ${outlined ? theme.palette.secondary.main : "none"}`,
  },
}));

const SwitchDiv = styled("div")(({ theme, color, variant, width }) => ({
  width: width ? width : "35%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "center",
}));

export { SwitchDiv, IconSwitcher };
