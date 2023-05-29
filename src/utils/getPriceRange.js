/**
 *
 * @param {array} venues all the venues
 * @param {*} type the type of range to get
 * @description gets the range of prices or capacities
 * @deprecated this function is not used anymore (i think?)
 * @returns the range of prices or capacities
 */
const getRange = (venues, type) => {
  const min = Math.min(...venues.map((venue) => venue[type]));
  const max = Math.max(...venues.map((venue) => venue[type]));
  return [min, max];
};

export default getRange;
