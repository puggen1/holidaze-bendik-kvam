import React from 'react'
import { IconSwitcher, SwitchDiv } from './index.styles'
const IconSwitch = ({children, outlined, event, checked}) => {
  return (
    <SwitchDiv>
      {children}
      <IconSwitcher checked={checked} onChange={event} color='secondary' outlined={outlined}/>
    </SwitchDiv>
  )
}

export default IconSwitch