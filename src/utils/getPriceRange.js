const getRange = (venues, type) => {
  const min = Math.min(...venues.map((venue) => venue[type]));
  const max = Math.max(...venues.map((venue) => venue[type]));
  return [min, max];
};

export default getRange;
