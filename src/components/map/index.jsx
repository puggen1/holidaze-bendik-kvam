import { Typography } from "@mui/material"

const Map = ({lng, lat, address, city, zip, country}) => {
    const firstPart = `https://maps.googleapis.com/maps/api/staticmap?center=`
    const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const lastPart = `&zoom=14&size=350x250&key=${key}&format=jpg&scale=2`
    const size={
        width: 'auto',
        height: 'auto',
        maxHeight: '250px',
        maxWidth: '100%',
        borderRadius: '20px',
        margin:"0 auto"
    }
    let url
    if((!lat || !lng) && (address !== "" && city !== "" && zip !== "" && country !== "")){
        //the thing to convert address to lat and lng
        const fullAddress = `${address === "unknown" ? "" : address} ${city === "unknown" ? "": city} ${zip === "unknown" ? "": zip} ${country === "unknown" ? "": country}`
        url = firstPart+fullAddress+lastPart
    }
    else if(address === "" && city === "" && zip === "" && country === ""){
       return(<>
        <Typography margin="auto auto" variant='p' fontFamily="Roboto" component="p">No location provided</Typography>
        </>)
        
    
    }else{
        const tempMarker = `&markers=color:blue%7Clabel:S%7C${lng + "" +lat}`
        url = firstPart+lat+lng+tempMarker+lastPart
    }
    return(<>
    <img style={size} src={url} alt="map"/>
    </>)
}

export default Map