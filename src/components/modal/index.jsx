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
 
  return (
    <DefaultModal open={modalStatus} onClose={() => setModalStatus(false)}>
        <InnerModal>
        {innerContent}
        </InnerModal>
    </DefaultModal>
  )
}

export default OuterModal