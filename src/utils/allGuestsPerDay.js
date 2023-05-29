/**
 *
 * @param {array} bookings all the bookings
 * @description gets the number of guests per day
 * @returns the number of guests per day
 */
const allGuestsPerDay = (bookings) => {
  let result = {};
  for (let booking of bookings) {
    const end = new Date(booking.dateTo);
    let current = new Date(booking.dateFrom);
    while (current <= end) {
      const dateString = current.toISOString().split("T")[0];
      result[dateString] = result[dateString] || { guests: 0, date: current };
      result[dateString].guests += booking.guests;
      //add a day
      current = new Date(current.getTime() + 24 * 60 * 60 * 1000);
      if (current > new Date(booking.dateTo)) break;
    }
  }
  return Object.values(result);
};

export default allGuestsPerDay;
