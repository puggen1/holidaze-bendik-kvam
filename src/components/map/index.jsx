const Map = ({lng, lat, address, city, zip, country}) => {
    const firstPart = `https://maps.googleapis.com/maps/api/staticmap?center=`
    const key = `AIzaSyB7bSL0jgw16oShULlXqPNoPX8lcc1w1lw`
    const lastPart = `&zoom=14&size=350x250&key=${key}&format=jpg&scale=2`
    const size={
        width: '350px',
        height: '250px',
        borderRadius: '20px'
    }
    let url
    if(!lat || !lng){
        //the thing to convert address to lat and lng
        const fullAddress = `${address === "unknown" ? "" : address} ${city === "unknown" ? "": city} ${zip === "unknown" ? "": zip} ${country === "unknown" ? "": country}`
        url = firstPart+fullAddress+lastPart
    }else{
        const tempMarker = `&markers=color:blue%7Clabel:S%7C${lng,lat}`
        url = firstPart+lat+lng+tempMarker+lastPart
    }
    return(<>
    <img style={size} src={url} alt="map"/>
    </>)
}

export default Map