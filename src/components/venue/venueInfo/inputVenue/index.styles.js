import { InnerInfo } from "../info/index.styles";
import { styled } from "@mui/material";



const InnerEditInfo = styled(InnerInfo)(({ theme }) => ({
    gridTemplateRows: "auto auto auto 1fr 1fr",
    ".price, .guests":{
        display:"grid",
        backgroundColor: "#ffffff",
    },
    ".price":{
        gridColumn: "5/6",
        gridRow: "2/3",
    },
    ".guests":{
        gridRow: "3/4", 
    },
    ".desc":{
        gridRow: "4/6",
    },
    ".icons":{
        display: "flex",
        alignItems: "center",
        gridColumn: "1/5",
        gridRow: "2/4",
        "& div":{
            width: "auto",
        }
    },
}));



export {InnerEditInfo}