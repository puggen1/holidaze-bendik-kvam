import dayjs from "dayjs";
import { useCallback } from "react";

/**
 * @description This hook is used to check what days are booked
 * @returns a function to check if a date is booked
 */
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
