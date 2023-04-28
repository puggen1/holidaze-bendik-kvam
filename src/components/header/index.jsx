import { InnerHeader } from './index.styles'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <InnerHeader>
        <Link to="/" className='logo'><img src='logo.svg'/></Link>
        </InnerHeader>
    </header>
  )
}
