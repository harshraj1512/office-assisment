import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='flex  min-h-screen w-full'>
        <div className='flex flex-col bg-gray-200  w-full'>
            {/* Header */}
            <Header />
            <main className=' h-full'>
                <Outlet/>
            </main>
        </div>
    </div>
    </>
  )
}

export default Layout