import React from 'react'
import { Header } from '../header'
import Footer from '../footer'
const Layout = ({children}) => {
  return (
    <div className="app">
    <Header/>
    <div className='mainContent'>
    {children}
    </div>
    <Footer/>
    </div>
  )
}


export default Layout