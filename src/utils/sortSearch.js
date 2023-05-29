const sortSearch = (searchresult, searchTerm) => {
  const sortedSearch = [...searchresult].sort((venueA, venueB) => {
    const venueAName = venueA.name.toLowerCase();
    const venueBName = venueB.name.toLowerCase();
    const aIndex = venueAName.indexOf(searchTerm);
    const bIndex = venueBName.indexOf(searchTerm);
    if (aIndex < bIndex) {
      return -1;
    }
    if (aIndex > bIndex) {
      return 1;
    }
    return 0;
  });
  return sortedSearch;
};
export default sortSearch;
