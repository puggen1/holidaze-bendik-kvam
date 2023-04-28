import React from 'react'
import { Header } from '../header'
import Footer from '../footer'

//header
//children
//footer
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}


export default Layout