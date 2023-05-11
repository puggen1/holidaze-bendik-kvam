import { createContext, useEffect, useState } from "react";

const AddEditContext = createContext();

export const AddEdit = ({ children }) => {
  const [media, setMedia] = useState([]);
  //adding placeholder here for now
  const [venueInfo, setVenueInfo] = useState({
    name: "",
    price: 0,
    maxGuests: 1,
    description: "",
    meta: { wifi: false, pets: false, breakfast: false, parking: false },
    media: [],
    location: {
      address: "",
      city: "",
      zip: 0,
      country: "",
    },
  });
  useEffect(() => {
    setVenueInfo({ ...venueInfo, media });
  }, [venueInfo]);
  const tester = () => {
    //the console log proves that the state is slow, something needs to be done with the state before eventually sending new venue / update excisting one...........
    console.log(venueInfo);
  };
  return (
    <AddEditContext.Provider
      value={{ media, setMedia, venueInfo, setVenueInfo, tester }}
    >
      {children}
    </AddEditContext.Provider>
  );
};

export default AddEditContext;
