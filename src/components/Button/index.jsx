import React from 'react'
import {StyledButton} from './index.styles.js'
const Button = ({variant, text, event, color, type="button"}) => {
  return (
    <StyledButton type={type} variant={variant} color={color} onClick={event}>{text}</StyledButton>
  )
}

export default Button