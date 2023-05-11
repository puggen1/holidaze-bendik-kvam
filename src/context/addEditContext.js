import { createContext, useEffect, useState } from "react";
const AddEditContext = createContext();

export const AddEdit = ({ children }) => {
  const [media, setMedia] = useState([]);
  //adding placeholder here for now
  const [meta, setMeta] = useState({wifi: false, pets: false, breakfast: false, parking: false});
  const [guest, setGuest] = useState(1)
  const [venueInfo, setVenueInfo] = useState({
    name: "",
    price: 0,
    maxGuests: 1,
    description: "",
    meta: meta,
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
  }, [media,venueInfo]);
  useEffect(() => {
    setVenueInfo({ ...venueInfo, meta });
  },[meta, venueInfo]);
  useEffect(() => {
    setVenueInfo({ ...venueInfo, maxGuests: guest });
  },[guest, venueInfo]);
  return (
    <AddEditContext.Provider
      value={{ media, setMedia, venueInfo, setVenueInfo, setMeta, meta, setGuest, guest}}
    >
      {children}
    </AddEditContext.Provider>
  );
};

export default AddEditContext;
