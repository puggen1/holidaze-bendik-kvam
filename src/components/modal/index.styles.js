import { Box, styled, Modal } from "@mui/material";

const DefaultModal = styled(Modal)(({ theme }) => ({
  display: "flex",
}));
const InnerModal = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  height: "auto",
  minHeight: "300px",
  width: "600px",
  borderRadius: "20px",
  margin: "auto",
}));

export { InnerModal, DefaultModal };
