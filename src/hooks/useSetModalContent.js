import { useContext } from "react";
import {ModalContext} from "../context/modalContext";

//this is very simple but does so i odnt need to use context everywhere
const useSetModalContent = () => {
    const {setInnerContent} = useContext(ModalContext);
    const setModal = (content) => {
        setInnerContent(content);
    }
    return {setModal};
};

export default useSetModalContent;