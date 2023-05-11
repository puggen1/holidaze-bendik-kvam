import { createContext, useEffect, useState } from "react";
const AddEditContext = createContext();

export const AddEdit = ({ children }) => {
  const [media, setMedia] = useState([]);
  //adding placeholder here for now
  const [meta, setMeta] = useState({
    wifi: false,
    pets: false,
    breakfast: false,
    parking: false,
  });
  const [guest, setGuest] = useState(1);
  const [venueInfo, setVenueInfo] = useState({
    name: "",
    price: 0,
    maxGuests: 1,
    description: "",
    meta: { ...meta },
    media: [],
    location: {
      address: "",
      city: "",
      zip: 0,
      country: "",
    },
  });

  const tester = () => {
    console.log({ ...venueInfo, media, meta, maxGuests: guest });
  };
  return (
    <AddEditContext.Provider
      value={{
        media,
        setMedia,
        venueInfo,
        setVenueInfo,
        setMeta,
        meta,
        setGuest,
        guest,
        tester,
      }}
    >
      {children}
    </AddEditContext.Provider>
  );
};

export default AddEditContext;
