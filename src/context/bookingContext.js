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
  const [bookingId, setBookingId] = useState("");
  const { sender } = useSendData();
  const booker = async (auth, type) => {
    const body = {
      dateFrom: bookingTime[0],
      dateTo: bookingTime[1],
      guests,
    };
    type === "new" && (body.venueId = venueId);
    const url = type === "new" ? "/bookings" : `/bookings/${bookingId}`;
    const response = await sender(
      body,
      baseUrl + url,
      type === "new" ? "POST" : "PUT",
      auth
    );

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
        bookingId,
        setBookingId,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default Booking;
