import { useContext } from "react";
import { SearchFilterContext } from "../context/searchFilterContext";

const useSearch = () => {
  const { data } = useContext(SearchFilterContext);
  const matchSearch = () => {
    console.log(data);
  };
  return { matchSearch };
};

export default useSearch;
