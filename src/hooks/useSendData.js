
const useSendData = ()=>{
        const sender = async(dataToSend, url, method, auth)=>{
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": auth ? "Bearer " + auth : ""
                },
                method: method,
                body: JSON.stringify(dataToSend),
            };
            try {
                const fetchedData = await fetch(url, options);
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