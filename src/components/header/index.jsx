import { InnerHeader } from './index.styles'
import React from 'react'
import { Link } from 'react-router-dom'
import IconSwitch from '../iconSwitch'

export const Header = () => {
  return (
    <header>
        <InnerHeader>
        <Link to="/" className='logo'><img src='logo.svg' alt='the holidaze logo'/></Link>
        </InnerHeader>
    </header>
  )
}
