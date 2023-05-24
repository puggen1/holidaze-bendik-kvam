import {memo} from 'react'
import Card from '../card'
import {OuterAllVenues} from './index.styles.js'
const AllVenues = memo(({venues}) => {
  return (
    <OuterAllVenues id='venues'>
        {venues.map((venue) => {
            const {id, name, media, price, maxGuests, meta} = venue;
            return(
                <Card key={id} venueId={id} name={name}  price={price} firstImage={media[0]} maxGuests={maxGuests} meta={meta}/>
            )
        })}
        </OuterAllVenues>
  )
})

export default AllVenues