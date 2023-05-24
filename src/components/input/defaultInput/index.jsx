import React from 'react'
import { StyledInput } from './index.styles'
const DefaultInput = ({variant, color, text, placeholder, type, manager}) => {
  return (
    <StyledInput {...manager} type={type ? type :"text"} variant={variant} color={color} label={text} placeholder={placeholder ? placeholder : ""}/>
  )
}

export default DefaultInput