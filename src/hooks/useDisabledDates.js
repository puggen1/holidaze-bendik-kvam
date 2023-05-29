import dayjs from "dayjs";
import dateFormat from "../utils/dateFormat";
/**
 *
 * @returns a function to check if the current date is disabled (used by antd datepicker)
 */
const useDisabledDates = () => {
  const checkDisabled = (current, booked) => {
    let now = dayjs();
    if (current === undefined) {
      return false;
    } else if (now.format(dateFormat) === current.format(dateFormat)) {
      return false;
    } else if (
      booked.find((date) => {
        return date.format(dateFormat) === current.format(dateFormat);
      })
    ) {
      return true;
    }
    return current.isBefore(now);
  };
  return { checkDisabled };
};

export default useDisabledDates;
