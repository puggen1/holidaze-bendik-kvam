import {styled, Box} from "@mui/material"


const OuterVenue = styled(Box)(({theme}) => ({
    width: "90%",
    margin: "1rem auto",
    display: "flex",
    gap: "2rem",
}));

const InnerVenue = styled(Box)(({theme}) => ({
    width: "50%",
}));

export {OuterVenue, InnerVenue}