import { useCallback } from "react";
import calculateDuration from "../utils/calculateDuration";
/**
 * @description This hook is used to get all the bookings for all the venues
 * @returns a function to get all the bookings for all the venues
 */
const useGetAll = () => {
  const getAllVenueBookings = useCallback((allVenues) => {
    if (allVenues.length > 0) {
      const bookings = allVenues.map((venue) => {
        const venueBookings = [];
        for (let booking of venue.bookings) {
          const duration = calculateDuration(booking.dateFrom, booking.dateTo);

          venueBookings.push({ ...booking, price: duration * venue.price });
        }
        return venueBookings;
      });

      return bookings.flat();
    }
  }, []);
  return { getAllVenueBookings };
};

export default useGetAll;
