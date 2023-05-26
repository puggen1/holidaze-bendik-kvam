import React from 'react'
import { StyledInput } from './index.styles'
const DefaultInput = ({variant, color, text, placeholder, type, manager, multiLine}) => {
  return (
    <StyledInput {...manager} multiline={multiLine} rows={multiLine ? 4 : 0} type={type ? type :"text"} variant={variant} color={color} label={text} placeholder={placeholder ? placeholder : ""}/>
  )
}

export default DefaultInput