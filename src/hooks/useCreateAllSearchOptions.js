import { useCallback, useContext } from "react";
import { SearchFilterContext } from "../context/searchFilterContext";
const useCreateAllSearchOptions = (searchOptions) => {
  const { setAllSearchOptions } = useContext(SearchFilterContext);
  const setAllOptions = useCallback(
    (data) => {
      const allOptions = [];
      for (let option of data) {
        if (option.location.address !== "Unknown") {
          //regex for removing Unkonwn from all options or if empty or the string: string
          const regex = /Unknown|string|^$/g;
          //test if the string matches the regex, if yes add it
          const string =
            option.location.address +
            " " +
            option.location.city +
            " " +
            option.location.zip +
            " " +
            option.location.country;
          const formatedString = string.replace(regex, "").trim();
          if (formatedString === "") {
            continue;
          }
          allOptions.push(
            {
              label: formatedString,
              value: formatedString,
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
    },
    [setAllSearchOptions]
  );
  return { setAllOptions };
};

export default useCreateAllSearchOptions;
