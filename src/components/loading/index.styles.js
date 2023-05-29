import { Box, styled } from "@mui/material";

const OuterLoader = styled(Box)(({ theme }) => ({
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    margin: "0 auto",
    border:`solid 5px ${theme.palette.primary.main}`,
    borderLeft: "solid 5px transparent",
    animation: "spin 1.5s linear infinite",
    "@keyframes spin": {
        "0%": {
            transform: "rotate(0deg)",
        },
        "100%": {
            transform: "rotate(360deg)",
        },
    },
}));


export default OuterLoader;