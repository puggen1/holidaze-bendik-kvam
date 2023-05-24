import { createContext, useEffect, useState } from "react";
export const VenueContext = createContext();

const Venue = ({ children }) => {
  const defaultFilter = {
    guests: 0,
    bookingTime: [],
    guestRange: [1, 100],
    priceRange: [0, 100000],
    meta: {
      pets: false,
      wifi: false,
      breakfast: false,
      parking: false,
    },
  };
  const [venues, setVenues] = useState([]);
  const [filter, setFilter] = useState(defaultFilter);
  const [filteredVenues, setFilteredVenues] = useState([]);

  const toggleWifi = () => {
    setFilter((prev) => {
      return { ...prev, meta: { ...prev.meta, wifi: !prev.meta.wifi } };
    });
  };
  const toggleBreakfast = () => {
    setFilter((prev) => {
      return {
        ...prev,
        meta: { ...prev.meta, breakfast: !prev.meta.breakfast },
      };
    });
  };
  const toggleParking = () => {
    setFilter((prev) => {
      return { ...prev, meta: { ...prev.meta, parking: !prev.meta.parking } };
    });
  };
  const togglePets = () => {
    setFilter((prev) => {
      return { ...prev, meta: { ...prev.meta, pets: !prev.meta.pets } };
    });
  };

  //updates filtered venues, but keeps the original venues for reset
  useEffect(() => {
    setFilteredVenues(venues);
  }, [venues]);
  return (
    <VenueContext.Provider
      value={{
        venues,
        setVenues,
        filter,
        setFilter,
        filteredVenues,
        setFilteredVenues,
        toggleWifi,
        toggleBreakfast,
        toggleParking,
        togglePets,
        defaultFilter,
      }}
    >
      {children}
    </VenueContext.Provider>
  );
};

export default Venue;
