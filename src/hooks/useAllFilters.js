import { useContext } from "react";
import { VenueContext } from "../context/venueContext";

const useAllFilters = () => {
  const { venues, setFilteredVenues, filter, setFilter, defaultFilter } =
    useContext(VenueContext);

  const filterAllVenues = (venues) => {
    const { guestRange, priceRange, meta, guests } = filter;
    const { wifi, breakfast, parking, pets } = meta;
    const filteredVenues = venues.filter((venue) => {
      const { maxGuests: venueMaxGuests, price, meta } = venue;
      const {
        wifi: venueWifi,
        breakfast: venueBreakfast,
        parking: venueParking,
        pets: venuePets,
      } = meta;
      return (
        venueMaxGuests >= guests &&
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        venueMaxGuests >= guestRange[0] &&
        venueMaxGuests <= guestRange[1] &&
        (wifi ? venueWifi === wifi : true) &&
        (breakfast ? venueBreakfast === breakfast : true) &&
        (parking ? venueParking === parking : true) &&
        (pets ? venuePets === pets : true)
      );
    });
    setFilteredVenues(filteredVenues);
  };
  const reset = () => {
    console.log("reset");
    console.log(defaultFilter);
    setFilter(defaultFilter);
    setFilteredVenues(venues);
  };
  return { filterAllVenues, reset };
};

export default useAllFilters;
