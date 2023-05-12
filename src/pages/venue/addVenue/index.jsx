import { InnerBooking as InnerAddVenue, InnerVenue, OuterVenue } from '../index.styles'
import InputVenue from '../../../components/venue/venueInfo/inputVenue'
import AddPictures from '../../../components/addPictures'
import Button from '../../../components/Button'
import { Box } from '@mui/material'
import { useContext } from 'react'
import AddEditContext from '../../../context/addEditContext'
import { ModalContext } from '../../../context/modalContext'
import { useNavigate } from 'react-router-dom'
import Create from '../../../components/modal/create'
const AddVenue = () => {
  const navigate = useNavigate()
 const {returnAllData, handleSubmit, venueInfo, guest, setVenueInfo, errors} = useContext(AddEditContext)
 const {setModalStatus, setInnerContent} = useContext(ModalContext)



 const validation = (data) => {
  setVenueInfo({...venueInfo, ...data, maxGuests: guest})
  setModalStatus(true)
  setInnerContent(<Create/>)
  
}

  const onCreate =()=>{
    handleSubmit(validation)()
    if(Object.keys(errors).length > 0){
      setModalStatus(false)
    }
  }
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