import dayjs from "dayjs";
const useCheckBooked = () => {
    const checkBooked =(bookedDates)=>{
        let booked = [];
        bookedDates.forEach(day => {
        if(day.notEnoughSpace){
          booked.push(dayjs(day.date));
        }
        return
      })
        return booked}
    return {checkBooked}
};

export default useCheckBooked;