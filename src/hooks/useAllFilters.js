import { useContext } from "react";
import { VenueContext } from "../context/venueContext";
import { BookingContext } from "../context/bookingContext";
import useFilterDays from "./useFilterDays";
const useAllFilters = () => {
  const { venues, setFilteredVenues, filter, setFilter, defaultFilter } =
    useContext(VenueContext);
  const {
    bookingTime,
    guests: currentGuests,
    setBookingTime,
  } = useContext(BookingContext);
  const { filter: DateFilter } = useFilterDays();
  const filterAllVenues = (venues) => {
    const { guestRange, priceRange, meta } = filter;
    const { wifi, breakfast, parking, pets } = meta;
    const filteredVenues = venues.filter((venue) => {
      console.log(bookingTime, currentGuests);
      const VenueIsBooked = DateFilter(venue, bookingTime, currentGuests);
      const { maxGuests: venueMaxGuests, price, meta } = venue;
      const {
        wifi: venueWifi,
        breakfast: venueBreakfast,
        parking: venueParking,
        pets: venuePets,
      } = meta;
      return (
        venueMaxGuests >= currentGuests &&
        price >= priceRange[0] &&
        price <= priceRange[1] &&
        venueMaxGuests >= guestRange[0] &&
        venueMaxGuests <= guestRange[1] &&
        (wifi ? venueWifi === wifi : true) &&
        (breakfast ? venueBreakfast === breakfast : true) &&
        (parking ? venueParking === parking : true) &&
        (pets ? venuePets === pets : true) &&
        VenueIsBooked
      );
    });
    console.log(filteredVenues);
    setFilteredVenues(filteredVenues);
  };
  const reset = () => {
    setFilter(defaultFilter);
    setFilteredVenues(venues);
    setBookingTime([undefined, undefined]);
  };
  return { filterAllVenues, reset };
};

export default useAllFilters;
