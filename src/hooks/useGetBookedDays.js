import { useEffect, useState } from "react";
import allGuestsPerDay from "../utils/allGuestsPerDay";
const useGetallBookedDates = (bookings, guests, maxGuests) => {
  const [allBookedDates, setAllBookedDates] = useState([]);
  useEffect(() => {
    const temp = allGuestsPerDay(bookings);
    for (let day of temp) {
      if (day.guests + guests > maxGuests) {
        day.notEnoughSpace = true;
      } else {
        day.notEnoughSpace = false;
      }
    }
    setAllBookedDates(temp);
  }, [bookings, guests, maxGuests]);
  return { allBookedDates };
};

export default useGetallBookedDates;
