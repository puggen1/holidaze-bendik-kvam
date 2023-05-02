import React from 'react'
import { IconSwitcher, SwitchDiv } from './index.styles'
const IconSwitch = ({Icon, outlined}) => {
  return (
    <SwitchDiv>
      {Icon}
      <IconSwitcher color='secondary' outlined={outlined}/>
    </SwitchDiv>
  )
}

export default IconSwitch