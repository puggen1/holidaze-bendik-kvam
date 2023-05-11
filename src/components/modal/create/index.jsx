
import { Typography, Button as MuiButton, Box } from '@mui/material'
import Button from "../../Button/index"
import {ModalContext} from '../../../context/modalContext'
import {useContext} from 'react';
import AddEditContext from '../../../context/addEditContext';
const Create = () => {
    const {venueInfo} = useContext(AddEditContext)
    const {setModalStatus} = useContext(ModalContext)
    //send data, and give alert based on response
    
  return ( 
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%",  margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h4' component="p">Add {venueInfo.name}?</Typography>
        <Box sx={{width:"80%", display:"grid", gap:"1rem", margin:"1rem auto"}}>
        <Typography textAlign="center" variant='h6' component="p">price: {venueInfo.price}</Typography>
        <Typography textAlign="center" variant='h6' component="p">max guests: {venueInfo.maxGuests}</Typography>
        </Box>
        <Box sx={{display:"flex", gap:"2rem", marginTop:"auto"}}>
        <Button event={()=>{setModalStatus(false)}} color="error" variant="contained" text="Cancel"/>
        <Button event={()=>{console.log(venueInfo)}} color="secondary" variant="contained" text="Create"/>
        </Box>
    </div>
  )
}

export default Create