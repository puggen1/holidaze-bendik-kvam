import { useContext } from "react";
import { SearchFilterContext } from "../context/searchFilterContext";
const useGetSearch = () => {
  const { search } = useContext(SearchFilterContext);
  return { search };
};
export default useGetSearch;
