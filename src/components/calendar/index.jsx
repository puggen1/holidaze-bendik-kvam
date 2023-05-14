import { DatePicker } from "antd"
import dayjs from "dayjs"
import { useEffect, useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { StyledRangePanel } from "./index.styles";
import useModalToggler from "../../hooks/useModalToggler";
import useSetModalContent from "../../hooks/useSetModalContent";
import Login from "../modal/login";
const Calendar = ({bookedDates = [], pickedDates, setPickedDates, parent, loggedIn=false}) => {

//hook extraction
const {modalOn} = useModalToggler()
const {setModal} = useSetModalContent()

    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const dateFormat = "DD/MM/YYYY";
    const [booked, setBooked] = useState([])

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
      console.log(invalid)
      invalid  ? setPickedDates(undefined, undefined) : setPickedDates([start, end])
  }
    useEffect(() => {
    const checkBooked = () => {
      let booked = [];
      bookedDates.forEach(day => {
      if(day.notEnoughSpace){
        booked.push(dayjs(day.date));
      }
      return
    })
    setBooked(booked)

    }
    checkBooked()

    },[bookedDates])
    useEffect(() => {
      if(pickedDates=== undefined){
        return
      }
      isBookedChecker(pickedDates)
    }, [booked]);

      const reset = () => {
        setPickedDates([]);
      };
      //this function is runned when date is picked, loops trough the booked dates, checks if each booked date if between the two ranges
      
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
     const test = (trigger) =>{
      return parent.current
      }
      const disabledAction = () =>{
        modalOn()
        setModal(<Login/>)
      }
      //an function here for now, it will be used to open modal when user is not logged in and tries to click on the calendar
      
  return (
    <>
    <RangePicker
    //style to hide rane picker input
    style={{visibility:"hidden"}}
    popupStyle={{maxWidth:"100%"}}
    popupClassName="bookingCalendar"
    allowClear={true}
    panelRender={panelRenderer}
    defaultPickerValue={pickedDates}
    value={pickedDates}
    getPopupContainer={test}
    //format={dateFormat}
    open={true}
    onCalendarChange={loggedIn ? isBookedChecker : disabledAction}
    disabledDate={disabled}
    mode={['date', 'date']}
    format="YYYY-MM-DD"
  />

</>
  )
}

export default Calendar