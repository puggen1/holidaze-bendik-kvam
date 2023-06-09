/**
 *
 * @param {Array} bookings all the bookings
 * @description gets the current number of guests
 * @returns the current number of guests
 */
const currentGuest = (bookings) => {
  //here is a function or someting to go trough all bookings, find the one that is checked in and use a reduce to get the total number of guests
  const currentGuest = bookings.reduce((acc, booking) => {
    let bookingStart = new Date(booking.dateFrom);
    let bookingEnd = new Date(booking.dateTo);
    let today = new Date();
    if (today >= bookingStart && today <= bookingEnd) {
      return (acc += booking.guests);
    }
    return acc;
  }, 0);

  return currentGuest;
};

export default currentGuest;
