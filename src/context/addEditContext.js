import { createContext, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addEditSchema from "../utils/schemas/addEdit";
const AddEditContext = createContext();
export const AddEdit = ({ children }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addEditSchema) });
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
    id: "",
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

  const returnAllData = useCallback(()=> {
    return { ...venueInfo, media, meta: meta, maxGuests: guest };
  }, [venueInfo, media, meta, guest]);
  const resetContext =() => {
    setMedia([]);
    setMeta({ wifi: false, pets: false, breakfast: false, parking: false });
    setGuest(1);
    setVenueInfo({ name: "", id: "", price: 0, maxGuests: 1, description: "", meta: { ...meta }, media: [], location: { address: "", city: "", zip: 0, country: "" } });
    setValue("name", "");
    setValue("price", 0);
    setValue("maxGuests", 1);
    setValue("description", "");
    setValue("location.address", "");
    setValue("location.city", "");
    setValue("location.zip", 0);
    setValue("location.country", "");
    setValue("media", []);

  }
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
        returnAllData,
        register,
        handleSubmit,
        setValue,
        errors,
        resetContext
      }}
    >
      {children}
    </AddEditContext.Provider>
  );
};

export default AddEditContext;
