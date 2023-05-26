import { Card } from "antd"
import { useGetData } from "../../../hooks/useGetData"
import { baseUrl } from "../../../utils/constants"
import { Box, Typography } from "@mui/material"
import GuestStats from "../../stats/guestStats"
import RevenueStats from "../../stats/revenueStats"
import useGetAll from "../../../hooks/useGetAll"
import AdminBookings from "../../booking/adminBookings"
import { useState, useEffect } from "react"
import { OuterVenueInfo, InnerVenueInfo, OuterStats } from "./index.styles"
import useMOdalToggler from "../../../hooks/useModalToggler"
import useSetModalContent from "../../../hooks/useSetModalContent"
import DeleteVenue from "../../modal/deleteVenue"
import { Link } from "react-router-dom"
import Button from "../../Button"
const AdminVenueInfo = ({venue}) => {
  const {modalOn} = useMOdalToggler()
  const {setModal} = useSetModalContent()
  const [allBookings, setAllBookings] = useState([])
  const {getAllVenueBookings} = useGetAll()
  const {data, isLoading, isError} = useGetData(baseUrl + "/venues/" + venue + "?_bookings=true")

  useEffect(() => {
    if(Object.keys(data).length > 0){
      setAllBookings(getAllVenueBookings([data]))
    }
  }, [data, getAllVenueBookings])
  return (<OuterVenueInfo>
  <Card className="aroundInfo" style={{padding:"2rem", borderRadius:"30px", boxShadow:"0px 0px 5px 1px rgba(29, 43, 56, 0.5)"}}>
    {isLoading && <div>Loading...</div>}
    {isError && <div>Something went wrong...</div>}
    <InnerVenueInfo>
    {Object.keys(data).length > 0 && <>
      <Box gridColumn="1/4" display="flex" flexWrap="wrap" padding="1rem 0 " gap="2rem 0" flexDirection="row" justifyContent="space-between"> 
        <Typography textAlign="center" variant="h4" >{data.name}</Typography>
        <Box display="flex" gap="1rem" margin="0 auto">
        <Link to={"/venue/" + data.id}><Button text="view" variant="contained" color="secondary"/></Link>
        <Link to={"/venue/" + data.id + "/edit"}><Button text="edit" variant="contained" color="primary"/></Link>
        <Button event={()=>{modalOn(); setModal(<DeleteVenue venueId={data.id} type="admin"/>)}} text="delete" variant="contained" color="error"/>
      </Box>
      </Box>
      <OuterStats>
      <GuestStats bookings={allBookings}/>
      <RevenueStats bookings={allBookings}/>
      </OuterStats>
      <AdminBookings bookings={allBookings}/>
      </>
      }
      </InnerVenueInfo>
    </Card>
    </OuterVenueInfo>
  )
}

export default AdminVenueInfo