import React from 'react'
import { IconSwitcher, SwitchDiv } from './index.styles'
const IconSwitch = ({children, outlined}) => {
  return (
    <SwitchDiv>
      {children}
      <IconSwitcher color='secondary' outlined={outlined}/>
    </SwitchDiv>
  )
}

export default IconSwitch