import React from 'react'
import { useContext } from 'react'
import Modal from '@mui/material/Modal'
import { ModalContext } from '../../context/modalContext'
const OuterModal = () => {
    const { modal, setModal } = useContext(ModalContext)
  return (
    <Modal open={modal} onClose={() => setModal(false)}>
        <h1>modal</h1>
    </Modal>
  )
}

export default OuterModal