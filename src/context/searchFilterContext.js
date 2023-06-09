import { createContext, useState } from "react";
export const SearchFilterContext = createContext();

const SearchFilter = ({ children }) => {
  const [allSearchOptions, setAllSearchOptions] = useState([]);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [filterResult, setFilterResult] = useState([]);
  const [data, setData] = useState({});
  const submitter = (data) => {
    console.log(data);
  };
  return (
    <SearchFilterContext.Provider
      value={{
        submitter,
        filter,
        setFilter,
        sort,
        setSort,
        filterResult,
        setFilterResult,
        setData,
        data,
        allSearchOptions,
        setAllSearchOptions,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export default SearchFilter;
