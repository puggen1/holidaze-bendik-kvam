import { useContext } from "react";
import { VenueContext } from "../context/venueContext";
import { BookingContext } from "../context/bookingContext";
import useFilterDays from "./useFilterDays";
/**
 * @description This hook is used to filter the venues based on the filter state
 * @returns functions to filter the venues or reset the filters
 */
const useAllFilters = () => {
  const {
    venues,
    setFilteredVenues,
    filter,
    setFilter,
    defaultFilter,
    nonSearchFilter,
    setNonSearchFilter,
  } = useContext(VenueContext);
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
    setFilteredVenues(filteredVenues);
    setNonSearchFilter(filteredVenues);
  };
  const reset = () => {
    setFilter(defaultFilter);
    setFilteredVenues(venues);
    setNonSearchFilter(venues);
    setBookingTime([undefined, undefined]);
  };
  const filterBySearch = (e) => {
    if (e.target.value.length === 0) {
      setFilteredVenues(nonSearchFilter);
    } else {
      const filteredVenues = nonSearchFilter.filter((venue) => {
        if (venue.name.length === 0) {
          return false;
        }
        let { name } = venue;
        const query = e.target.value.toLowerCase();
        return name.toLowerCase().indexOf(query) !== -1;
      });
      setFilteredVenues(filteredVenues);
    }
  };
  return { filterAllVenues, reset, filterBySearch };
};

export default useAllFilters;
