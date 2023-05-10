import React from 'react'
import { useContext } from 'react'
import {DefaultModal} from './index.styles'
import { InnerModal } from './index.styles'
import { ModalContext } from '../../context/modalContext'
import Login from './login/index'
import Register from './register'
import Booking from './booking'
const OuterModal = () => {
    const { modalStatus, setModalStatus, innerContent } = useContext(ModalContext)
    //placeholder divs for now
    let content = <div>Default</div>
    if(innerContent === "login"){
        content = <Login/>
    }
    else if(innerContent === "booking"){
        content = <Booking/>
    }
    else if(innerContent === "register"){
        content = <Register/>
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
    <DefaultModal open={modalStatus} onClose={() => setModalStatus(false)}>
        <InnerModal>
        {content}
        </InnerModal>
    </DefaultModal>
  )
}

export default OuterModal