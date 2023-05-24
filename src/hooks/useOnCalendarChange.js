import { useCallback } from "react";
const useOnCalendarChange = () => {
    const onCalendarChange = useCallback((dates, setPickedDates, reset, booked) => {
            if(dates === null){
                reset()
                return
            }
            const start = dates[0]
            const end = dates[1]
            if(start === undefined || start === null || end === null || end === undefined){
                reset()
                return
            }
            if(start.isSame(end)){
              setPickedDates(undefined, undefined)
                return 
            }
            // if any of them are between set
            let invalid = false
            for(let day of booked){
                let after = (day.isAfter(start) || day.isSame(start))
                let before = (day.isBefore(end) || day.isSame(end)) 
                if(after && before){
                    invalid = true
                }
            }
            invalid  ? setPickedDates(undefined, undefined) : setPickedDates([start, end])
        },[])
    return {onCalendarChange};
};
export default useOnCalendarChange;