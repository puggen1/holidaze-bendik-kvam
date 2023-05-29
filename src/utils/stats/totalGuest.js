/**
 *
 * @param {Array} bookings all the bookings
 * @description gets the total number of guests
 * @returns the total number of guests
 */
const totalGuest = (bookings) => {
  const totalGuest = bookings.reduce((acc, booking) => {
    const bookingEnd = new Date(booking.dateTo);
    const today = new Date();
    if (today >= bookingEnd && today.getMonth() === bookingEnd.getMonth()) {
      return (acc += booking.guests);
    }
    return acc;
  }, 0);
  return totalGuest;
};

export default totalGuest;
