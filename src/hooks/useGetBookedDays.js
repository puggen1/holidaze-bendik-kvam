import { useEffect, useState, useRef } from "react";
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
  const tempBookings = useRef(temp);
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
      tempBookings.current = allGuestsPerDay(newBookings);
    } else {
      tempBookings.current = allGuestsPerDay(bookings);
    }
    for (let day of tempBookings.current) {
      if (day.guests + guests > maxGuests) {
        day.notEnoughSpace = true;
      } else {
        day.notEnoughSpace = false;
      }
    }
    setAllBookedDates(tempBookings.current);
  }, [bookings, guests, maxGuests, editBooking, editBookingOriginalDays]);
  return { allBookedDates };
};

export default useGetallBookedDates;
