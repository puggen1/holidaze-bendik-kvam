import { createContext, useState } from "react";


export const ModalContext = createContext();

const Modal = ({children})=>{
    const [modalStatus, setModalStatus] = useState(false);
    const [innerContent, setInnerContent] = useState("");
    return (
        <ModalContext.Provider value={{modalStatus, setModalStatus, innerContent, setInnerContent}}>
            {children}
        </ModalContext.Provider>
    )
}

export default Modal