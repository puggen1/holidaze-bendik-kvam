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
  const [editBookingTest] = useState(editBooking);
  const [editBookingOriginalDaysTest] = useState(editBookingOriginalDays);
  useEffect(() => {
    if (bookings.length === 0) {
      return;
    }
    if (editBookingTest && editBookingOriginalDaysTest.length > 0) {
      //if it is editing, exclude number of guests when checking the avalibility on original days
      const newBookings = bookings.filter((booking) => {
        if (
          dayjs(booking.dateFrom).isSame(editBookingOriginalDaysTest[0]) &&
          dayjs(booking.dateTo).isSame(editBookingOriginalDaysTest[1])
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
  }, [
    bookings,
    guests,
    maxGuests,
    editBookingTest,
    editBookingOriginalDaysTest,
  ]);
  return { allBookedDates };
};

export default useGetallBookedDates;
