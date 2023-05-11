import {useContext} from 'react'
import { ModalContext } from '../../../context/modalContext'
import { InnerBooking as InnerAddVenue, InnerVenue, OuterVenue } from '../index.styles' 
import AddEditContext from '../../../context/addEditContext'
import InputVenue from '../../../components/venue/venueInfo/inputVenue'
import AddPictures from '../../../components/addPictures'
import Button from '../../../components/Button'
import { Box } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetData } from '../../../hooks/useGetData'
import { baseUrl } from '../../../utils/constants'

const EditVenue = () => {
  const navigate = useNavigate()
  const {id} = useParams()
 const {tester} = useContext(AddEditContext)
 const  {data, isLoading, isError} = useGetData(baseUrl + "/venues/" + id)
 const {setModalStatus, setInnerContent} = useContext(ModalContext)
  return (<>
    {isLoading && <div>loading</div>}
    {isError && <div>error</div>}
    {Object.keys(data).length > 0 && 
      <OuterVenue>
        <InnerVenue>
        <AddPictures/>
        <InputVenue venue={data}/>
        </InnerVenue>
        <InnerAddVenue sx={{bottom:"15%"}}>
          <Box>
            {/*error messages here*/}
          </Box>
          <Box sx={{display:"flex", justifyContent:"center", gap:"1rem"}}>
          <Button event={()=>{navigate(-1)}} text="cancel" color="error" variant="contained"/>
          <Button event={()=>{setModalStatus(true); setInnerContent(<div>test</div>); tester()}} text="Create" color="secondary" variant="contained"/>
          </Box>
        </InnerAddVenue>
    </OuterVenue>
}
    </>
  )
}

export default EditVenue