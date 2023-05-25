import calculateDuration from "../utils/calculateDuration";
const useGetAll = () => {
  const getAllVenueBookings = (allVenues) => {
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
  };
  return { getAllVenueBookings };
};

export default useGetAll;
