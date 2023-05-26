const useSetOffset = (offset, venues, setOffset) => {
    const prev = () => {
        if (offset === 0){
            return
        }
        else{
            setOffset(offset - 52)
        }
    };
    const next = () => {
        if (venues.length < 52){
            return
        }
        else{
            setOffset(offset + 52)
        }
    };
    return { prev, next };
};

export default useSetOffset;