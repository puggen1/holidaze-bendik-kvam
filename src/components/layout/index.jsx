import React from 'react'
import { Header } from '../header'
import Footer from '../footer'

//header
//children
//footer
const Layout = ({children}) => {
  return (
    <div className="app">
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}


export default Layout