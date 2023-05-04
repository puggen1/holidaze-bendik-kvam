import { DatePicker } from "antd"
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";

const Calendar = ({bookedDates = []}) => {
 
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = "DD/MM/YYYY";
    const weekFormat = "MM/DD";
    let booked = bookedDates.map((date)=>{
        return dayjs(date)
    })
    //const monthFormat = "YYYY/MM";
    //const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
    const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
    const customWeekStartEndFormat = (value) =>
    `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
      .endOf("week")
      .format(weekFormat)}`;

      const [defaultValue, setDefaultValue] = useState([]);
      const reset = () => {
        setDefaultValue([]);
      };
      //this function is runned when date is picked, loops trough the booked dates, checks if each booked date if between the two ranges
      const isBookedChecker = (dates, datestring) => {
        const start = dates[0]
        const end = dates[1]
        for(let day of booked){
            if((day.isAfter(start) || day.isSame(start)) &&  (day.isBefore(end) || day.isSame(end))){
                setDefaultValue([])
                return
            }
            else{
                setDefaultValue([start, end])
                console.log(start,end)
            }

        } 

    };
    //makes days in the past and days that are booked disabled
      const disabled = (current) => {
        let now = dayjs()
        if(now.format(dateFormat) === current.format(dateFormat)){
            return false
        }
        if(booked.find((date)=>{
            return date.format(dateFormat) === current.format(dateFormat)
        })){return true}
        return current.isBefore(now);
      };
  return (
    <>
    <RangePicker
    allowClear={true}
    defaultValue={defaultValue}
    value={defaultValue}
    //format={dateFormat}
    open={true}
    onCalendarChange={isBookedChecker}
    disabledDate={disabled}
    mode={['date', 'date']}
    format="YYYY-MM-DD"
  />

</>
  )
}

export default Calendar