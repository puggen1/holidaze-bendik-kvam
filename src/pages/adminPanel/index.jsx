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
const Admin = () => {
  const {checkPermission} = useCheckPermission()
  const {handleBar} = useHandleSnackbar()
  const navigate = useNavigate()

  if(!checkPermission("admin")){
    navigate("/")
    handleBar("You need to be an admin to access this page", "error")
  };
  const name = useGetUserInfo("name")
  const auth = useGetUserInfo("accessToken")
  const {data, isLoading, isError} = useGetData(baseUrl + "/profiles/"+ name + "?_bookings=true&_venues=true", auth)
  return (
    <OuterDashboard>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong...</div>}
      {Object.keys(data).length > 0 && (<><Box><Button text="Exit" color="secondary" variant="contained" event={()=>{navigate("/")}}/></Box><Typography variant="h5" component="h1" textAlign="center">{name}'s Dashboard</Typography><GuestStats venues={data.venues}/></>)}
    </OuterDashboard>
  )
}

export default Admin