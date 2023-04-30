import React, { useState, useEffect } from "react";

/**
 * Our API hook
 */
function useApi(url, dataToSend = undefined, method = "GET") {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (dataToSend) options.body = JSON.stringify(dataToSend);
  async function getData() {
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

  useEffect(() => {
    getData();
  }, [url]);
  const initiator = getData;
  return { data, isLoading, isError, initiator };
}

export { useApi };
