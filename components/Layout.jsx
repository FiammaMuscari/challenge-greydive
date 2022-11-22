import React from 'react'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <div className='text-white font-mono'>
        <Header/>
        <main>{children}</main>
    </div>
  )
}
