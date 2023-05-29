import React from 'react'
import { StyledInput } from './index.styles'
const DefaultInput = ({variant, color, text, placeholder, type, manager=false, multiLine, event=false}) => {
  if(event) return (
    <StyledInput onChange={event} multiline={multiLine} rows={multiLine ? 4 : 0} type={type ? type :"text"} variant={variant} color={color} label={text} placeholder={placeholder ? placeholder : ""}/>
  )
  return (
    <StyledInput {...manager}   multiline={multiLine} rows={multiLine ? 4 : 0} type={type ? type :"text"} variant={variant} color={color} label={text} placeholder={placeholder ? placeholder : ""}/>
  )
}

export default DefaultInput