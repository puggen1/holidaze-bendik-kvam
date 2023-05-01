import { useState, useEffect } from "react";


function useApi(url, method = "GET") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
const getData = async (dataToSend = undefined) => {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if(method !== "GET" && dataToSend){
      options.body = JSON.stringify(dataToSend);
    }
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url, options);
        const json = await fetchedData.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
   if(method === "GET"){
    useEffect(() => {
      getData();
    }, [url, method]);
   }
  
  return { data, isLoading, isError, initiator : getData };
}

export { useApi };
