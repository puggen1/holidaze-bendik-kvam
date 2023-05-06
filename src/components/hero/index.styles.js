import { Box, styled } from "@mui/material";

const OuterHero = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "90vh",
    display: "flex",

}));

const InnerHero = styled(Box)(({ theme }) => ({
    backgroundColor:"#1a1a1a",
    opacity:"0.75",
    height: "80%",
    width: "70%",
    margin: "auto",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "h1":{
        padding: "4rem 0 0 0",
    },
    "*":{
        opacity:"1",
    },
    ".ant-picker-range":{
        backgroundColor:"transparent !important",
        border:"none !important",
        width:"100% !important",
        padding:"0 !important",
        ".ant-picker-input":{
            backgroundColor:"white !important",
            padding:"15px 20px !important",
            borderRadius:"30px !important",
        },
        ".ant-picker-suffix":{
            display:"none !important",
        },
        ".ant-picker-input-active":{
            border: `1px solid ${theme.palette.primary.main} !important`
        },
        ".ant-picker-focused":{
            border: `none !important`,
            boxShadow: `none !important`
        },
        ".ant-picker-active-bar":{
            backgroundColor: `transparent !important`,
        },
    }
}));
const HeroSearch = styled(Box)(({ theme }) => ({
    padding: "2rem 0",
    width: "60%",
}));

const HeroDate = styled(Box)(({ theme }) => ({
    width: "60%",
    display: "grid",
    gridTemplateColumns: "45% 10% 45%",
    ".from":{
        gridColumn: "1 / 2",
        paddingBottom:"1rem",
    },
    ".to":{
        gridColumn: "3 / 4",
        paddingBottom:"1rem",
    },
    ".ant-picker-range":{
        gridColumn: "1 / 4",
    },

}));
const HeroOptions = styled(Box)(({ theme }) => ({
    display:"flex",
    padding:"2rem 0",
    width:"60%",
    justifyContent:"space-between"
}));
export {OuterHero, InnerHero, HeroSearch, HeroDate, HeroOptions}