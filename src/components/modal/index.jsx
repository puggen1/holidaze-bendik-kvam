import React from 'react'
import { useContext } from 'react'
import {DefaultModal} from './index.styles'
import { InnerModal } from './index.styles'
import { ModalContext } from '../../context/modalContext'
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