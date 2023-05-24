import { useState, useEffect } from 'react';
const useGetStat = (callBack, content) => {
    const [stat, setStat] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        const getStat = async () => {
            try {
                const response = await callBack(content);
                setStat(response);
            } catch (error) {
                setIsError(true);
            }
            finally {
                setIsLoading(false);
            }
           
        };
        getStat()
    },[content, callBack]);
    return { stat, isLoading, isError };
};

export default useGetStat;