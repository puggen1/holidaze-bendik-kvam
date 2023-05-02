import React from 'react'
import { IconSwitcher, SwitchDiv } from './index.styles'
import { Switch } from '@mui/material'

const IconSwitch = ({Icon, outlined}) => {
  return (
    <SwitchDiv>
      {Icon}
      <IconSwitcher color='secondary' outlined={outlined}/>
    </SwitchDiv>
  )
}

export default IconSwitch