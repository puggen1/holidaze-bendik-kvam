import { useState, useEffect } from "react";


const useGetData = (url, auth=false)=>{
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url, auth ? { headers: { Authorization: "Bearer " + auth } } : {});
        const json = await fetchedData.json();
        if(json.errors) throw new Error(json.errors[0].message);
        setData(json);
      } catch (error) {
        setIsError(true);
        setData(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url, auth]);
  return { data, isLoading, isError };
}

export { useGetData };
