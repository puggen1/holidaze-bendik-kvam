import { createContext, useState } from "react";
import { Alert, Snackbar as MUISnackbar } from "@mui/material";
export const SnackBarContext = createContext();

const Snackbar = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <SnackBarContext.Provider
      value={{ open, setOpen, message, setMessage, type, setType }}
    >
      <MUISnackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} color={type}>
          {message}
        </Alert>
      </MUISnackbar>
      {children}
    </SnackBarContext.Provider>
  );
};

export default Snackbar;
