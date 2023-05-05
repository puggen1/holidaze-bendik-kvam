import React from 'react'
import { StyledInput } from './index.styles'
const DefaultInput = ({variant, color, text, placeholder}) => {
  return (
    <StyledInput variant={variant} color={color} label={text} placeholder={placeholder ? placeholder : ""}/>
  )
}

export default DefaultInput