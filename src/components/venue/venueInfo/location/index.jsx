import { Typography } from "@mui/material"
import Map from "../../../map"
import {OuterLocation} from './index.styles.js'
const Location = ({location}) => {
    const {address, city, zip, country, lat=undefined, lng=undefined} = location
  return (
    <OuterLocation>
    {address ? <Typography variant='p' fontFamily="Roboto" component="p">{address}</Typography> : null}
    {city ? <Typography variant='p' fontFamily="Roboto" component="p">{city}</Typography> : null}
    {zip ? <Typography variant='p' fontFamily="Roboto" component="p">{zip}</Typography> : null}
    {country ? <Typography variant='p' fontFamily="Roboto" component="p">{country}</Typography> : null}
    <Map lat={lat} lng={lng} address={address} city={city} zip={zip} country={country}/>
    </OuterLocation>
  )
}

export default Location