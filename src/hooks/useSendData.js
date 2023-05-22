
const useSendData = ()=>{
        const sender = async(dataToSend, url, method, auth)=>{
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": auth ? "Bearer " + auth : ""
                },
                method: method,
            };
            if(dataToSend) options.body = JSON.stringify(dataToSend);
           
            try {
                const fetchedData = await fetch(url, options);
                if(method === "DELETE") return fetchedData
                const json = await fetchedData.json();
                return json
                } catch (error) {
                console.log(error);
                return error
            }
        }
        return { sender };
      }
      export default useSendData