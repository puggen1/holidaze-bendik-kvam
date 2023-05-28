import { InnerBooking as InnerAddVenue, InnerVenue, OuterVenue } from '../index.styles'
import InputVenue from '../../../components/venue/venueInfo/inputVenue'
import AddPictures from '../../../components/addPictures'
import Button from '../../../components/Button'
import { Box } from '@mui/material'
import { useContext, useEffect } from 'react'
import AddEditContext from '../../../context/addEditContext'
import { useNavigate } from 'react-router-dom'
import Create from '../../../components/modal/create'
import useModalToggler from '../../../hooks/useModalToggler'
import useSetModalContent from '../../../hooks/useSetModalContent'
import useCheckPermission from '../../../hooks/useCheckPermission'
import useHandleSnackbar from '../../../hooks/useHandleSnackbar'
const AddVenue = () => {
  const {handleBar} = useHandleSnackbar()
  const navigate = useNavigate()
  const {checkPermission} = useCheckPermission()
  const {handleSubmit, venueInfo, guest, setVenueInfo, errors, resetContext} = useContext(AddEditContext)
  //useEffect with cleanupfunction to reset context
  useEffect(()=>{
    if(!checkPermission("admin") || !checkPermission("auth")){
      navigate(-1)
      handleBar("You need to be an logged in admin to access this page", "error")
    }
  },[checkPermission, navigate, handleBar])
  const {modalOn, modalOff} = useModalToggler()
  const {setModal} = useSetModalContent()
 const validation = (data) => {
  setVenueInfo({...venueInfo, ...data, maxGuests: guest})
  modalOn()
  setModal(<Create/>)
  
}

  const onCreate =()=>{
    handleSubmit(validation)()
    if(Object.keys(errors).length > 0){
      modalOff()
    }
  }
//cleanup
  useEffect(()=>{
    return () => {
      resetContext()
    }
  },[resetContext])
  return (
  
    <OuterVenue>
        <InnerVenue>
        <AddPictures/>
        <InputVenue/>
        </InnerVenue>
        <InnerAddVenue sx={{bottom:"15%"}}>
          <Box>
            {/*error messages here*/}
          </Box>
          <Box sx={{display:"flex", justifyContent:"center", gap:"1rem"}}>
          <Button event={()=>{navigate(-1)}} text="cancel" color="error" variant="contained"/>
          <Button event={()=>{onCreate()}} text="Create" color="secondary" variant="contained"/>
          </Box>
        </InnerAddVenue>
    </OuterVenue>

  )
}

export default AddVenue