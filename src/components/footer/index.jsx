import { Mail, Phone } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Footer as OuterFooter } from './index.styles'
const Footer = () => {
  return (
    <OuterFooter>
      <Box className="footerContact" sx={{color:"white"}}>
        <Typography><Mail /> holidaze@helpdesk.com</Typography>
        <Typography><Phone/> +47 55 32 21 23</Typography>      
      </Box>
      <Typography className='footerName' sx={{color:"white", margin:"auto 0 10px 0"}}>© Holidaze  {new Date().getFullYear().toString()}</Typography>
      <Box className="adress" sx={{color:"white", textAlign:"center"}}>
        <Typography>Lars Hilles gate 30</Typography>
        <Typography>5008 Bergen</Typography>
        <Typography>Norway</Typography>
        
      </Box>
    </OuterFooter>
  )
}

export default Footer