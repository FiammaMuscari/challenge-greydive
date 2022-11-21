import React from 'react'
import { Header } from './Header'

export const Layout = ({children}) => {
  return (
    <div className='bg-[#292643] text-white p-12'>
        <Header/>
        <main className="">{children}</main>
    </div>
  )
}