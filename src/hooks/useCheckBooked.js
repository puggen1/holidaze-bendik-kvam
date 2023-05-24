import dayjs from "dayjs";
import { useCallback } from "react";
const useCheckBooked = () => {
  const checkBooked = useCallback((bookedDates) => {
    let booked = [];
    bookedDates.forEach((day) => {
      if (day.notEnoughSpace) {
        booked.push(dayjs(day.date));
      }
      return;
    });
    return booked;
  }, []);
  return { checkBooked };
};

export default useCheckBooked;
