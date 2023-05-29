import { useNavigate } from 'react-router-dom'
import Button from '../../Button'
import useModalToggler from '../../../hooks/useModalToggler'
import { Typography, Box } from '@mui/material'
import useSendData from '../../../hooks/useSendData'
import { baseUrl } from '../../../utils/constants'
import useGetUserInfo from '../../../hooks/useGetUserInfo'
import useHandleSnackbar from '../../../hooks/useHandleSnackbar'
const DeleteVenue = ({venueId, type="venue"}) => {
    const auth = useGetUserInfo("accessToken")
    const navigate = useNavigate()
    const {handleBar} = useHandleSnackbar()
    const {modalOff} = useModalToggler()
    const {sender} = useSendData()
    const DeleteVenue = async ()=>{
        const response = await sender(false, baseUrl + "/venues/" + venueId, "DELETE", auth)
        if(response.ok){
            modalOff()
            navigate(type === "admin" ? 0 : "/")
            handleBar("venue deleted", "success")

        }
        else{
            handleBar("Something went wrong", "error")
        }

    }
  return (
    <div style={{display:"flex", flexDirection:"column", width:"80%", alignItems:"center", height:"100%", minHeight:"25vh",  margin:"0rem auto"}}>
      <Box display="flex" justifyContent="center" alignItems="center" gap="0.5rem" flexDirection="column">
    <Typography variant="h4" component="h4" color="primary" fontWeight="300" fontSize="2rem" fontFamily="Roboto">Delete venue?</Typography>
    <Typography component="p" variant="body1" color="primary">This cannot be undone!</Typography>
    </Box>
    <Box display="flex" justifyContent="space-evenly" width="80%">
    <Button event={() => modalOff()} text="No take me back!" color="error" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
    <Button event={DeleteVenue} text="Delete" color="secondary" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
    </Box>
</div>
  )
}

export default DeleteVenue