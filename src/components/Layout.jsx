import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useDarkMode } from '../context'

const Layout = () => {
  const { darkMode } = useDarkMode();
  
  return (
    <>
      <div className={`flex  w-full flex-col ${darkMode ? 'bg-black text-white' : ''}`}>
        
        <Header />
        <main >
          <div >
            <Outlet/>
          </div>
        </main>
      </div>
    </>
  )
}

export default Layout