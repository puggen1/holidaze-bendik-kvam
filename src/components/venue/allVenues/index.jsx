import {memo} from 'react'
import Card from '../card'
import {OuterAllVenues} from './index.styles.js'
import { Box } from '@mui/material'
import Button from '../../Button'
import Loader from '../../loading'
import FetchError from '../../fetchError'
const AllVenues = memo(({venues, next, prev, loading, error}) => {
  return (<>
    <OuterAllVenues id='venues'>
       {loading &&
        <Box gridColumn="1/5">
        <Loader/>
        </Box>}
        {error && <FetchError/>}
        {(!loading && !error) && venues.map((venue) => {
            const {id, name, media, price, maxGuests, meta} = venue;
            return(
                <Card key={id} link={"/venue/" + id} name={name}  price={price} firstImage={media[0]} maxGuests={maxGuests} meta={meta}/>
            )
        })}
        </OuterAllVenues>
        <Box gap="2rem" display="flex" margin="2rem auto" justifyContent="center">
         <Button event={()=>{prev()}} text="previous" color="secondary" variant="outlined"/>
         <a href='#venues'><Button event={()=>{next()}} text="next" color="secondary" variant="outlined"/></a>
        </Box>
        </>
  )
})

export default AllVenues