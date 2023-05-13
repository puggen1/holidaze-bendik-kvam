import {useContext, useEffect} from 'react'
import { InnerBooking as InnerAddVenue, InnerVenue, OuterVenue } from '../index.styles' 
import AddEditContext from '../../../context/addEditContext'
import InputVenue from '../../../components/venue/venueInfo/inputVenue'
import AddPictures from '../../../components/addPictures'
import Button from '../../../components/Button'
import { Box } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetData } from '../../../hooks/useGetData'
import { baseUrl } from '../../../utils/constants'
import Edit from '../../../components/modal/edit'
import useModalToggler from '../../../hooks/useModalToggler'
import useSetModalContent from '../../../hooks/useSetModalContent'
import useCheckPermission from '../../../hooks/useCheckPermission'
import useGetUserInfo from '../../../hooks/useGetUserInfo'
const EditVenue = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const  {data, isLoading, isError} = useGetData(baseUrl + "/venues/" + id + "?_owner=true")
  const {handleSubmit, venueInfo, guest, setVenueInfo, errors} = useContext(AddEditContext)
  const {modalOn, modalOff} = useModalToggler()
  const {setModal} = useSetModalContent()
  const {checkPermission} = useCheckPermission()
  const name = useGetUserInfo("name")
  //checks if you are logged in and venue manager, and if you are the owner of the venue
  useEffect(()=>{
    if(Object.keys(data).length > 0){
        if((!checkPermission("admin") && !checkPermission("auth")) || (name !== data.owner.name)){
        navigate(-1)
      }
  }},[data])
 const validation = (data) => {
  //this might not be needed
  setVenueInfo({...venueInfo, ...data, maxGuests: guest})
  modalOn()
  setModal(<Edit/>)
  
}

  const onEdit =()=>{
    handleSubmit(validation)()
    if(Object.keys(errors).length > 0){
      modalOff()
    }
  }
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
          <Button event={()=>{onEdit()}} text="Create" color="secondary" variant="contained"/>
          </Box>
        </InnerAddVenue>
    </OuterVenue>
}
    </>
  )
}

export default EditVenue