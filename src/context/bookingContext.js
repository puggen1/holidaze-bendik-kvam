import { createContext, useState } from "react";
import useSendData from "../hooks/useSendData";
import { baseUrl } from "../utils/constants";

export const BookingContext = createContext();

const Booking = ({ children }) => {
  const [venueId, setVenueId] = useState("");
  const [bookingTime, setBookingTime] = useState([]);
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(0);
  const [venueName, setVenueName] = useState("");
  const { sender } = useSendData();
  const booker = async (auth) => {
    console.log(auth);
    const body = {
      venueId,
      dateFrom: bookingTime[0],
      dateTo: bookingTime[1],
      guests,
    };
    const response = await sender(body, baseUrl + "/bookings", "POST", auth);

    return response;
  };
  return (
    <BookingContext.Provider
      value={{
        setVenueId,
        venueId,
        setBookingTime,
        bookingTime,
        setGuests,
        guests,
        setPrice,
        price,
        venueName,
        setVenueName,
        booker,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default Booking;
