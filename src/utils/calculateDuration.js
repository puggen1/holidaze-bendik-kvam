/**
 *
 * @param {*} start the start date
 * @param {*} end the end date
 * @description calculates the duration of the booking
 * @returns the duration of the booking
 */
const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const duration = endDate - startDate;
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  if (days === 0) return 1;
  return days;
};

export default calculateDuration;
