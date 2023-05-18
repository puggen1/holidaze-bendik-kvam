import { useContext } from "react";
import {ModalContext} from "../context/modalContext";

const useModalToggler = () => {
    const {setModalStatus} = useContext(ModalContext);

    const modalOn = () => {
        setModalStatus(true);
    }
    const modalOff = () => {
        setModalStatus(false);
    }
    return {modalOff, modalOn};
};

export default useModalToggler;