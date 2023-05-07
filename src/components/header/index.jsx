import { InnerHeader } from './index.styles'
import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../navigation'
import ProfileHeader from '../profile/header'
export const Header = () => {
  return (
    <header>
        <InnerHeader>
        <Navigation/>
        <Link to="/" className='logo'><img src='logo.svg' alt='the holidaze logo'/></Link>
        <ProfileHeader/>
        </InnerHeader>
    </header>
  )
}
