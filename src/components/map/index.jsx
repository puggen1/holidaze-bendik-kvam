import useGetData from "../../hooks/useGetData"
const Map = ({lng, lat, address, city, zip, country}) => {
    const size={
        width: '100px',
        height: '100px'
    }
    let center
    if(!lat || !lng){
        //the thing to convert address to lat and lng
    }else{
        center={
            lat: lat,
            lng: lng
        }
    }
    const {data, isLoading, isError} = useGetData("https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=AIzaSyB7bSL0jgw16oShULlXqPNoPX8lcc1w1lw")
    console.log(data)
    return(<>test</>)
}

export default Map