import { useNavigate } from 'react-router-dom'
import Button from '../../Button'
import useModalToggler from '../../../hooks/useModalToggler'
import { Typography } from '@mui/material'
import useSendData from '../../../hooks/useSendData'
import { baseUrl } from '../../../utils/constants'
import useGetUserInfo from '../../../hooks/useGetUserInfo'
import useHandleSnackbar from '../../../hooks/useHandleSnackbar'
const DeleteVenue = ({venueId}) => {
    const auth = useGetUserInfo("accessToken")
    const navigate = useNavigate()
    const {handleBar} = useHandleSnackbar()
    const {modalOff} = useModalToggler()
    const {sender} = useSendData()
    const DeleteVenue = async ()=>{
        const response = await sender(false, baseUrl + "/venues/" + venueId, "DELETE", auth)
        if(response.ok){
            modalOff()
            navigate("/")
            handleBar("venue deleted", "success")

        }
        else{
            handleBar("Something went wrong", "error")
        }

    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%", margin:"1rem auto"}}>
    <Typography variant="h4" component="h4" color="primary" fontWeight="300" fontSize="2rem" fontFamily="Roboto">Delete venue?</Typography>
    <Typography component="p" variant="body1" color="primary">This cannot be undone!</Typography>
    <Button event={() => modalOff()} text="No take me back!" color="error" variant="contained" width="100%" height="3rem" margin="1rem 0"/>
    <Button event={DeleteVenue} text="Delete" color="secondary" variant="contained" width="100%" height="3rem" margin="1rem 0"/>

</div>
  )
}

export default DeleteVenue