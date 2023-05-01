import { createContext, useState } from "react";


export const ModalContext = createContext();

const Modal = ({children})=>{
    const [modalStatus, setModalStatus] = useState(false);

    return (
        <ModalContext.Provider value={{modalStatus, setModalStatus}}>
            {children}
        </ModalContext.Provider>
    )
}

export default Modal