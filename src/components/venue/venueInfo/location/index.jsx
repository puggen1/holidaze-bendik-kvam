import { Box, Typography } from "@mui/material"
import Map from "../../../map"
import {OuterLocation, LocationInfo} from './index.styles.js'
const Location = ({location}) => {
  const {address, city, zip, country, lat=undefined, lng=undefined} = location
  return (
    <OuterLocation>
      <LocationInfo>
        <Box>
          {address !== "Unknown" ?
          <>
          <Typography variant='p' fontFamily="Roboto" component="p">Address</Typography>
          <Typography variant='p' fontFamily="Roboto" component="p">{address}</Typography>
          </>
          : null}
        </Box>
        <Box>
        {city !== "Unknown" ?
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">City</Typography>
         <Typography variant='p' fontFamily="Roboto" component="p">{city}</Typography>
         </>
         : null}
        </Box>
        <Box>
        {zip !== "Unknown" ?
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">Zip</Typography>
        <Typography variant='p' fontFamily="Roboto" component="p">{zip}</Typography>
        </>
        : null}
        </Box>
        <Box>
        {country !== "Unknown" ?
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">Country</Typography>
        <Typography variant='p' fontFamily="Roboto" component="p">{country}</Typography> </>: null}
        </Box>
    
    </LocationInfo>
    <Map lat={lat} lng={lng} address={address !== "Unknown" ? address : ""} city={city !== "Unknown" ? city : ""} zip={zip !== "Unknown" ? zip : ""} country={country !== "Unknown" ? country : ""}/>
    </OuterLocation>
  )
}

export default Location