import { useContext } from "react";
import { BookingContext } from "../context/bookingContext";
const useFilterAvalibleVenues = () => {
  const { bookingTime, guests } = useContext(BookingContext);
  const filter = (venues) => {
    console.log(bookingTime, guests, venues);
  };
  return { filter };
};
export default useFilterAvalibleVenues;
