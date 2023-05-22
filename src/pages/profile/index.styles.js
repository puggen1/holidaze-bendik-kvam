import { Box, styled } from "@mui/material";

const OuterUser = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gridTemplateAreas: `"profileInfo profileContent" "profileActions profileContent"`,
  gridTemplateRows: "500px auto",
  alignItems: "start",
  gap: "2rem",
  width: "66%",
  margin: "4rem auto 1rem auto",
}));

export { OuterUser };
