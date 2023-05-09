import { InnerHeader } from './index.styles'
import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../navigation'
import ProfileHeader from '../profile/header'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export const Header = () => {
  const {user, logout} = useContext(UserContext)
  const {name, avatar, venueManager = false,} = user
  return (
    <header>
        <InnerHeader>
        <Navigation name={name ? name : ""} venueManager={venueManager} logout={logout}/>
        <Link to="/" className='logo'><img src='/logo.svg' alt='the holidaze logo'/></Link>
        <ProfileHeader name={name} avatar={avatar}/>
        </InnerHeader>
    </header>
  )
}
