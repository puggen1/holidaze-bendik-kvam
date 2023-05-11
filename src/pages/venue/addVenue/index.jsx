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
 const {tester} = useContext(AddEditContext)
 const {setModalStatus, setInnerContent} = useContext(ModalContext)
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
          <Button event={()=>{setModalStatus(true); setInnerContent(<Create/>); tester()}} text="Create" color="secondary" variant="contained"/>
          </Box>
        </InnerAddVenue>
    </OuterVenue>

  )
}

export default AddVenue