import { useState, useEffect } from "react";
import { baseUrl } from "../utils/constants";
/**
 *
 * @param {Array} ids all the ids to fetch
 * @param {string} subUrl the sub url to fetch
 * @param {string} params  the params to fetch
 * @returns all the data combined
 */
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
  }, [ids, subUrl, params]);
  return { data };
};

export default useGetMultipleData;
