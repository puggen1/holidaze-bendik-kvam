import { useEffect, useState } from "react";
import allGuestsPerDay from "../utils/allGuestsPerDay";
import dayjs from "dayjs";
const useGetallBookedDates = (
  bookings,
  guests,
  maxGuests,
  editBooking = false,
  editBookingOriginalDays = []
) => {
  const [allBookedDates, setAllBookedDates] = useState([]);
  let temp;
  useEffect(() => {
    if (editBooking) {
      //if it is editing, exclude number of guests when checking the avalibility on original days
      const newBookings = bookings.filter((booking) => {
        if (
          dayjs(booking.dateFrom).isSame(editBookingOriginalDays[0]) &&
          dayjs(booking.dateTo).isSame(editBookingOriginalDays[1])
        ) {
          return false;
        }
        return true;
      });
      temp = allGuestsPerDay(newBookings);
    } else {
      temp = allGuestsPerDay(bookings);
    }
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
