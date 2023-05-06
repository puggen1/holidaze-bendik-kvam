import React from 'react'
import {StyledButton} from './index.styles.js'
const Button = ({variant, text, event, color}) => {
  console.log(color)
  return (
    <StyledButton variant={variant} color={color} onClick={event}>{text}</StyledButton>
  )
}

export default Button