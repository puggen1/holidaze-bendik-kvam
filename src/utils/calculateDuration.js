const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const duration = endDate - startDate;
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  return days;
};

export default calculateDuration;
