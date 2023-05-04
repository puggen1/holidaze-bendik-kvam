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
        if(dates === null){
            console.log("test")
            reset()
            return
        }
        const start = dates[0]
        const end = dates[1]
        console.log(start, end)
        if(start === undefined || start === null || end === null || end === undefined){
            reset()
            return
        }
        if(start.isSame(end)){
            reset()
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
        console.log(invalid)
        invalid  ? setDefaultValue(undefined, undefined) : setDefaultValue([start, end])
    }
    //makes days in the past and days that are booked disabled
      const disabled = (current) => {
        let now = dayjs()
        if(current === undefined){
            return false
        }
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
    defaultPickerValue={defaultValue}
    value={defaultValue}
    //format={dateFormat}
    open={true}
    onCalendarChange={isBookedChecker}
    disabledDate={disabled}
    mode={['date', 'date']}
    format="YYYY-MM-DD"
  />
<button style={{marginTop:"auto"}} onClick={()=>{console.log(defaultValue)}}>click me</button>
<button style={{marginTop:"auto"}} onClick={()=>{setDefaultValue([booked[0], booked[1]])}}>click me</button>

</>
  )
}

export default Calendar