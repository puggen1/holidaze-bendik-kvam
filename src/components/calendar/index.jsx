import { DatePicker } from "antd"
import dayjs from "dayjs"
import { useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { StyledRangePanel } from "./index.styles";
const Calendar = ({bookedDates = []}) => {
 
    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = "DD/MM/YYYY";
    let booked = bookedDates.map((date)=>{
        return dayjs(date)
    })
    //const monthFormat = "YYYY/MM";
    //const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
    
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
        if(start === undefined || start === null || end === null || end === undefined){
            reset()
            return
        }
        if(start.isSame(end)){
          setDefaultValue(undefined, undefined)
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
        else if(now.format(dateFormat) === current.format(dateFormat)){
            return false
        }
        else if(booked.find((date)=>{return date.format(dateFormat) === current.format(dateFormat)})){
          return true
        }
        return current.isBefore(now);
      };
      const panelRenderer = (panelNode)=>{
            return(<StyledRangePanel>
            {panelNode}
          </StyledRangePanel>)
      }
  return (
    <>
    <RangePicker
    //style to hide rane picker input
    style={{visibility:"hidden"}}
    popupStyle={{maxWidth:"100%"}}
    popupClassName="bookingCalendar"
    allowClear={true}
    panelRender={panelRenderer}
    defaultPickerValue={defaultValue}
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