import { Box, Typography } from "@mui/material"
import Map from "../../../map"
import {OuterLocation, LocationInfo} from './index.styles.js'
const Location = ({location}) => {
  const {address, city, zip, country, lat=undefined, lng=undefined} = location
  return (
    <OuterLocation>
      <LocationInfo>
      {address !== "Unknown" ?
        <Box>
          <>
          <Typography variant='p' fontFamily="Roboto" component="p">Address</Typography>
          <Typography variant='p' fontFamily="Roboto" component="p">{address}</Typography>
          </>
        </Box>
        : null}
        {city !== "Unknown" ?
        <Box>
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">City</Typography>
         <Typography variant='p' fontFamily="Roboto" component="p">{city}</Typography>
         </>
        </Box>
                 : null}
        {zip !== "Unknown" ?

        <Box>
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">Zip</Typography>
        <Typography variant='p' fontFamily="Roboto" component="p">{zip}</Typography>
        </>
        </Box>
                : null}
        {country !== "Unknown" ?

        <Box>
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">Country</Typography>
        <Typography variant='p' fontFamily="Roboto" component="p">{country}</Typography> </>
        </Box>
    : null}
    </LocationInfo>
    <Map lat={lat} lng={lng} address={address !== "Unknown" ? address : ""} city={city !== "Unknown" ? city : ""} zip={zip !== "Unknown" ? zip : ""} country={country !== "Unknown" ? country : ""}/>
    </OuterLocation>
  )
}

export default Location