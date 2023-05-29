import React from 'react'
import { IconSwitcher, SwitchDiv } from './index.styles'
const IconSwitch = ({children, outlined=false, event=undefined, checked=undefined, label}) => {
 
  return (
    <SwitchDiv>
      {children}
      <IconSwitcher aria-label={label} value={checked} checked={checked} onChange={event} color='secondary' outlined={outlined ? outlined : undefined}/>
    </SwitchDiv>
  )
}

export default IconSwitch