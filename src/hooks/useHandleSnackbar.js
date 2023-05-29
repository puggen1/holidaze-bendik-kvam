import { useContext } from "react";
import { SnackBarContext } from "../context/snackBarContext";
const useHandleSnackbar = () => {
  const { setOpen, setMessage, setType } = useContext(SnackBarContext);
  const handleBar = (message, type) => {
    setMessage(message);
    setType(type);
    setOpen(true);
  };
  return { handleBar };
};

export default useHandleSnackbar;
