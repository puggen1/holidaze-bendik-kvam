import { useContext } from "react";
import { SearchFilterContext } from "../context/searchFilterContext";
const useCreateAllSearchOptions = (searchOptions) => {
  const { setAllSearchOptions } = useContext(SearchFilterContext);
  //need to make autocorrect array with all venues, pluss all places

  const setAllOptions = (data) => {
    const allOptions = [];
    for (let option of data) {
      if (option.location.address !== "Unknown") {
        allOptions.push(
          {
            label:
              option.location.address +
              ", " +
              option.location.city +
              ", " +
              option.location.zip +
              ", " +
              option.location.country,
            value:
              option.location.address +
              ", " +
              option.location.city +
              ", " +
              option.location.zip +
              ", " +
              option.location.country,
            id: option.id + "location",
            type: "location",
          },
          {
            label: option.name,
            value: option.name,
            id: option.id,
            type: "venue",
          }
        );
      } else {
        allOptions.push({
          label: option.name,
          value: option.name,
          id: option.id,
          type: "venue",
        });
      }
    }
    setAllSearchOptions(allOptions);
  };
  return { setAllOptions };
};

export default useCreateAllSearchOptions;
