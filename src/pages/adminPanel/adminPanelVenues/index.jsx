import { OuterAdminVenues } from './index.styles'
import { useParams } from 'react-router-dom'
import { useGetData } from '../../../hooks/useGetData'
import useGetUserInfo from '../../../hooks/useGetUserInfo'
import AdminVenueList from '../../../components/venue/adminVenueList'
import AdminVenueInfo from '../../../components/venue/adminVenueInfo'
import { baseUrl } from '../../../utils/constants'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import Loader from '../../../components/loading'
import { Box } from '@mui/material'
const AdminPanelVenues = () => {
  const name = useGetUserInfo("name")
  const auth = useGetUserInfo("accessToken")
  const {data, isLoading, isError} = useGetData(baseUrl + "/profiles/"+ name + "?_venues=true", auth)
  const {id} = useParams()
  const [currentVenue, setCurrentVenue] = useState(id)
  useEffect(() => {
    if(Object.keys(data).length > 0 && !id){
      setCurrentVenue(data.venues[0].id)
    }
  }, [data, id])
  return (
    <OuterAdminVenues>
      {isLoading && <Box margin="2rem auto" gridColumn="1/5"><Loader/></Box>}
      {isError && <div>Something went wrong...</div>}
    {Object.keys(data).length > 0 && <>
    <Typography component="h1" variant='h5' sx={{textAlign:"center"}} padding="1rem" gridColumn="1/4">Your Venues</Typography>
      <AdminVenueList venues={data.venues} current={currentVenue} changer={setCurrentVenue}/>
      <AdminVenueInfo venue={currentVenue ? currentVenue : data.venues[0].id} />
      </>}
    </OuterAdminVenues>
  )
}

export default AdminPanelVenues