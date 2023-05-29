import { useContext, useState } from "react";
import { BookingContext } from "../context/bookingContext";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import useGetallBookedDates from "./useGetBookedDays";
import useDisabledDates from "./useDisabledDates";
const useFilterAvalibleVenues = (venues) => {
  const { checkDisabled } = useDisabledDates();
  const { bookingTime, guests } = useContext(BookingContext);
  const [venue, setVenue] = useState({});
  const { allBookedDates } = useGetallBookedDates(
    venue,
    guests,
    venue.maxGuests
  );
  //add all
  dayjs.extend(customParseFormat);

  const filter = (venue) => {
    setVenue(venue);
    return checkDisabled(bookingTime, allBookedDates);
  };
  return { filter };
};
export default useFilterAvalibleVenues;
