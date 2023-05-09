import { GuestAmount, GuestInputSection, GuestButton } from "./index.styles"

const GuestInput = ({value, changer}) => {
    const AddGuest = () => {
        changer(value + 1)
    }
    const RemoveGuest = () => {
        if(value === 1){
            return
        }
        changer(value - 1)
    }

  return (
    <GuestInputSection>
            <GuestButton  variant="outlined" color="secondary" onClick={RemoveGuest}>-</GuestButton>
            <GuestAmount fontFamily="roboto" fontWeight="300">{value}</GuestAmount>
            <GuestButton  variant="outlined" color="secondary" onClick={AddGuest}>+</GuestButton>
    </GuestInputSection>
  )
}

export default GuestInput