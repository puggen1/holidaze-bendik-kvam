import { styled, Box } from "@mui/material";


const OuterAdminVenues = styled(Box)(({ theme }) => ({
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
"@media (max-width: 1300px)": {
    gridTemplateColumns:"1fr",
},
}));


export {OuterAdminVenues}