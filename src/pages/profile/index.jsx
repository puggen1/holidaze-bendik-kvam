import { OuterUser } from "./index.styles"
import { useParams } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import { baseUrl } from "../../utils/constants"
import UseGetUserInfo from "../../hooks/useGetUserInfo"
import ProfileInfo from "../../components/profile/profileInfo"
import ProfileActions from "../../components/profile/profileActions"
import ProfileContent from "../../components/profile/profileContent"
import useCheckPermission from "../../hooks/useCheckPermission"
import Loader from "../../components/loading"
import { Box } from "@mui/material"
import FetchError from "../../components/fetchError"
const Profile = ({type="regular"}) => {
  const {checkPermission} = useCheckPermission()
  const {name} = useParams()
  const auth = UseGetUserInfo("accessToken")
  const storedName = UseGetUserInfo("name") 
  const isAdmin = checkPermission("admin")
  const {data, isLoading, isError} = useGetData(`${baseUrl}/profiles/${name}?_venues=true&_bookings=true`, auth)
  return (
    <OuterUser>
      {isLoading && <Box margin="2rem auto" gridColumn="1/3"><Loader/></Box>}
      {isError && <FetchError/>}
      {((Object.keys(data).length > 0)&&( !isError && !isLoading)) && (<><ProfileInfo isAdmin={isAdmin} own={data.name === storedName} stats={data._count} name={data.name} img={data.avatar}/> {storedName === data.name ? <ProfileActions isAdmin={isAdmin}/> :  null} <ProfileContent isAdmin={isAdmin} own={storedName === data.name} type={type} venues={data.venues} bookings={data.bookings}/> </>)}
    </OuterUser>
    
  )
}

export default Profile