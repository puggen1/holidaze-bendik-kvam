import { useState } from "react"
import { GuestAmount, GuestInputSection, GuestButton } from "./index.styles"

const GuestInput = () => {
    const [guestAmount, setGuestAmount] = useState(1)
    const AddGuest = () => {
        setGuestAmount(guestAmount + 1)
    }
    const RemoveGuest = () => {
        if(guestAmount === 1){
            return
        }
        setGuestAmount(guestAmount - 1)
    }

  return (
    <GuestInputSection>
            <GuestButton  variant="outlined" color="secondary" onClick={RemoveGuest}>+</GuestButton>
            <GuestAmount>{guestAmount}</GuestAmount>
            <GuestButton  variant="outlined" color="secondary" onClick={AddGuest}>-</GuestButton>
    </GuestInputSection>
  )
}

export default GuestInput