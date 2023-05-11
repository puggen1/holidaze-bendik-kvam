import {useContext} from 'react'
import { ModalContext } from '../../../context/modalContext'
import { InnerBooking as InnerAddVenue, InnerVenue, OuterVenue } from '../index.styles' 
import AddEditContext from '../../../context/addEditContext'
import InputVenue from '../../../components/venue/venueInfo/inputVenue'
import AddPictures from '../../../components/addPictures'
import Button from '../../../components/Button'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const EditVenue = () => {
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
          <Button event={()=>{setModalStatus(true); setInnerContent(<div>test</div>)}} text="Create" color="secondary" variant="contained"/>
          </Box>
        </InnerAddVenue>
    </OuterVenue>
  )
}

export default EditVenue