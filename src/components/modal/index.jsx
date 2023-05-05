import React from 'react'
import { useContext } from 'react'
import Modal from '@mui/material/Modal'
import { ModalContext } from '../../context/modalContext'
const OuterModal = () => {
    const { modalStatus, setModalStatus, innerContent } = useContext(ModalContext)
    //placeholder divs for now
    let content = <div>Default</div>
    if(innerContent === "login"){
        content = <div>Login</div>
    }
    else if(innerContent === "register"){
        content = <div>Register</div>
    }
    else if(innerContent === "avatar"){
        content = <div>Avatar</div>
    }
    else if(innerContent === "media"){
        content = <div>Media</div>
    }
    else if(innerContent === "logout"){
        content = <div>Logout</div>
    }
    else if(innerContent === "delete"){
        content = <div>Delete</div>
    }
    else if(innerContent === "cancel"){
        content = <div>cancel</div>
    }
    else if(innerContent === "edit"){
        content = <div>Edit</div>
    }


  return (
    <Modal open={modalStatus} onClose={() => setModalStatus(false)}>
        {content}
    </Modal>
  )
}

export default OuterModal