import Button from "../../components/Button";
import {OuterDashboard} from "./index.styles";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import useCheckPermission from "../../hooks/useCheckPermission";
import useHandleSnackbar from "../../hooks/useHandleSnackbar";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import { useGetData } from "../../hooks/useGetData";
import { baseUrl } from "../../utils/constants";
import GuestStats from "../../components/stats/guestStats";
import RevenueStats from "../../components/stats/revenueStats";
import useGetMultipleData from "../../hooks/useGetMultipleData";
import { useState, useEffect } from "react";
import getAll from "../../hooks/useGetAll";
import AdminVenues from "../../components/venue/adminVenues";
const Admin = () => {
  const {getAllVenueBookings} = getAll()
  const {checkPermission} = useCheckPermission()
  const {handleBar} = useHandleSnackbar()
  const navigate = useNavigate()
  const [allBookings, setAllBookings] = useState([])
  if(!checkPermission("admin")){
    navigate("/")
    handleBar("You need to be an admin to access this page", "error")
  };
  const name = useGetUserInfo("name")
  const auth = useGetUserInfo("accessToken")
  const [ids, setIds] = useState([])
  const {data, isLoading, isError} = useGetData(baseUrl + "/profiles/"+ name + "?_bookings=true&_venues=true", auth)
  useEffect(() => {
    if(Object.keys(data).length > 0){
      setIds(data.venues.map(venue=>{return venue.id}))
    }
  }, [data])
  const {data: allVenues} = useGetMultipleData(ids,"/venues/","?_bookings=true")
  //gets all bookings and sets them to state
 useEffect(() => {
    setAllBookings(getAllVenueBookings(allVenues))
 }, [allVenues, getAllVenueBookings])
/*getting all bookings from all venues*/
  return (
    <OuterDashboard>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong...</div>}
      {Object.keys(data).length > 0 &&
      (<>
        <Box>
        <Button text="Exit" color="secondary" variant="contained" event={()=>{navigate("/")}}/>
        </Box>
        <Typography variant="h5" component="h1" textAlign="center">{name}'s Dashboard</Typography>
        <GuestStats bookings={allBookings}/>
        <RevenueStats bookings={allBookings}/>
        <AdminVenues venues={allVenues}/>
      </>)}
    </OuterDashboard>
  )
}

export default Admin