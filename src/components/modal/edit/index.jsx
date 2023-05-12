
import { Typography, Button as MuiButton, Box } from '@mui/material'
import Button from "../../Button/index"
import {ModalContext} from '../../../context/modalContext'
import {useContext} from 'react';
import AddEditContext from '../../../context/addEditContext';
import useSendData from '../../../hooks/useSendData';
import { baseUrl } from '../../../utils/constants';
import useGetAuth from '../../../hooks/useGetAuth';
import useHandleSnackbar from '../../../hooks/useHandleSnackbar';
import { useNavigate} from 'react-router-dom';
const Edit = () => {
    const {returnAllData} = useContext(AddEditContext)
    const auth = useGetAuth()
    //due to state being slow, venueInfo is an combined object of all the diffrent states.....
    const venueInfo = returnAllData()
    const {setModalStatus} = useContext(ModalContext)
    //send data, and give alert based on response
    const navigate = useNavigate()
    const {handleBar} = useHandleSnackbar()
    const {sender} = useSendData()
    const editVenue =async () => {
    const result = await sender(venueInfo, baseUrl + "/venues/" + venueInfo.id, "put",auth)
    if(result.id){
      setModalStatus(false)
      handleBar(<><p>Venue edited</p></>,"success")
      navigate(`/venue/${result.id}`)
    }
    else{
      setModalStatus(false)
      handleBar(<p>something went wrong</p>, "error" )
    }
    
  }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%",  margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h4' component="p">update {venueInfo.name}?</Typography>
       
        <Box sx={{display:"flex", gap:"2rem", marginTop:"auto"}}>
        <Button event={()=>{setModalStatus(false)}} color="error" variant="contained" text="Cancel"/>
        <Button event={()=>{editVenue()}} color="secondary" variant="contained" text="Create"/>
        </Box>
    </div>  )
}

export default Edit