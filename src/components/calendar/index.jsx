import { DatePicker } from "antd"
import dayjs from "dayjs"
import { useEffect, useState, useCallback } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { StyledRangePanel } from "./index.styles";
import useModalToggler from "../../hooks/useModalToggler";
import useSetModalContent from "../../hooks/useSetModalContent";
import Login from "../modal/login";
import useCheckBooked from "../../hooks/useCheckBooked";
import useDisabledDates from "../../hooks/useDisabledDates";
import useOnCalendarChange from "../../hooks/useOnCalendarChange";
const Calendar = ({bookedDates = [], pickedDates, setPickedDates, parent, loggedIn=false}) => {
  const {onCalendarChange} = useOnCalendarChange()
  const reset = useCallback(() => {
    setPickedDates([]);
  }, [setPickedDates]);
  const {checkBooked} = useCheckBooked()
  const {checkDisabled} = useDisabledDates()
//hook extraction
const {modalOn} = useModalToggler()
const {setModal} = useSetModalContent()

    dayjs.extend(customParseFormat);
    const { RangePicker } = DatePicker;
    const [booked, setBooked] = useState([])


  
const onChange = (dates, dateStrings) => {
  onCalendarChange(dates, setPickedDates, reset, booked)
};


    useEffect(() => {
    setBooked(checkBooked(bookedDates))
    },[bookedDates, setBooked, checkBooked])
    /*this runs forever because of the callbackfunction*/
    useEffect(() => {
      if(pickedDates === undefined || pickedDates.length === 0 ){
        return
      }
        onChange(pickedDates)
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [booked, onChange ]);

      //this function is runned when date is picked, loops trough the booked dates, checks if each booked date if between the two ranges
      
    //makes days in the past and days that are booked disabled
  
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
        return
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
    onCalendarChange={loggedIn ? onChange : disabledAction}
    disabledDate={(current)=>{return checkDisabled(current, booked)}}
    mode={['date', 'date']}
    format="YYYY-MM-DD"
  />

</>
  )
}

export default Calendar