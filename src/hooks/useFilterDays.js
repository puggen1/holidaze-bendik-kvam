import allGuestsPerDay from "../utils/allGuestsPerDay";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
const useFilterDays = () => {
  dayjs.extend(isBetween);
  const filter = (venue, bookingTime, guests) => {
    let start = bookingTime[0];
    let end = bookingTime[1];
    let status = true;
    let allBookedDays = allGuestsPerDay(venue.bookings);
    for (let day of allBookedDays) {
      if (day.guests + guests > venue.maxGuests) {
        day.notEnoughSpace = true;
      } else {
        day.notEnoughSpace = false;
      }
      if (
        dayjs(day.date).isBetween(start, end, null, "[]") &&
        day.notEnoughSpace === true
      ) {
        status = false;
      }
    }
    return status;
  };
  return { filter };
};

export default useFilterDays;
