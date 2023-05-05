import React from 'react'
import { StyledInput } from './index.styles'
const DefaultInput = ({variant, color, text}) => {
  return (
    <StyledInput variant={variant} color={color} label={text} />
  )
}

export default DefaultInput