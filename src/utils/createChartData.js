import allGuestsPerDay from "./allGuestsPerDay";
/**
 *
 * @param {array} data all the bookings
 * @description creates the data for the chart
 * @returns the data for the chart
 */
const createChartData = (data) => {
  if (!data) return;
  const guestDays = allGuestsPerDay(data);
  //need to create an array with every day that has been this month
  const allDays = new Array(new Date().getDate()).fill(0).map((_, index) => {
    const current = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      index + 1
    );
    const isGuestDay = guestDays.find(
      (day) =>
        day.date.toISOString().split("T")[0] ===
        current.toISOString().split("T")[0]
    );
    if (current.getDate() > new Date().getDate()) return {};
    if (isGuestDay) {
      return {
        guests: isGuestDay.guests,
        date: current,
      };
    }
    return {
      date: current,
      guests: 0,
    };
  });
  return allDays;
};

export default createChartData;
