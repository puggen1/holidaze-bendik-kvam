import { Box, Typography } from '@mui/material'
import Button from '../../components/Button'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Box display="flex" flexDirection="column" alignItems="center" margin="3rem" gap="5rem">
      <Typography variant="h5"  textAlign="center" component="h1">404 Page not found</Typography>
      <Button variant="contained" color="secondary" text="Go back" event={()=>{navigate(-1)}}/>
    </Box>
  )
}

export default NotFound