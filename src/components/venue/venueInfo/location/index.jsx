import { Box, Typography } from "@mui/material"
import Map from "../../../map"
import {OuterLocation, LocationInfo} from './index.styles.js'
const Location = ({location}) => {
    const {address, city, zip, country, lat=undefined, lng=undefined} = location
  return (
    <OuterLocation>
      <LocationInfo>
        <Box>
          {address ?
          <>
          <Typography variant='p' fontFamily="Roboto" component="p">Address</Typography>
          <Typography variant='p' fontFamily="Roboto" component="p">{address}</Typography>
          </>
          : null}
        </Box>
        <Box>
        {city ?
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">City</Typography>
         <Typography variant='p' fontFamily="Roboto" component="p">{city}</Typography>
         </>
         : null}
        </Box>
        <Box>
        {zip ?
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">Zip</Typography>
        <Typography variant='p' fontFamily="Roboto" component="p">{zip}</Typography>
        </>
        : null}
        </Box>
        <Box>
        {country ?
        <>
        <Typography variant='p' fontFamily="Roboto" component="p">Country</Typography>
        <Typography variant='p' fontFamily="Roboto" component="p">{country}</Typography> </>: null}
        </Box>
    
    </LocationInfo>
    <Map lat={lat} lng={lng} address={address} city={city} zip={zip} country={country}/>
    </OuterLocation>
  )
}

export default Location