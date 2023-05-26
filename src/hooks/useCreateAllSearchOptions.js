import { useCallback, useContext } from "react";
import { SearchFilterContext } from "../context/searchFilterContext";
const useCreateAllSearchOptions = (searchOptions) => {
  const { setAllSearchOptions } = useContext(SearchFilterContext);
  const setAllOptions = useCallback(
    (data) => {
      const allOptions = [];
      for (let option of data) {
        if(option.name.length === 0){
          continue;
        }
          allOptions.push({
            label: option.name,
            value: option.name,
            id: option.id,
            bookings: option.bookings,
            maxGuests: option.maxGuests,
          });
      }
      setAllSearchOptions(allOptions);
    },
    [setAllSearchOptions]
  );
  return { setAllOptions };
};

export default useCreateAllSearchOptions;
