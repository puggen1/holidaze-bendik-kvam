import { useState, useEffect } from "react";
import { baseUrl } from "../utils/constants";
const useGetMultipleData = (ids, subUrl, params) => {
  const [data, setdata] = useState([]);
  const fetchSingleData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    async function getAllData() {
      const allFetchedData = await ids.map((id) =>
        fetchSingleData(baseUrl + subUrl + id + params)
      );
      const allData = await Promise.all(allFetchedData);
      setdata(allData);
    }
    getAllData();
  }, [ids]);
  return { data };
};

export default useGetMultipleData;
