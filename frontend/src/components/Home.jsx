import React from 'react'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div className='w-screen h-screen bg relative'>
      <div className='w-full h-full flex items-center absolute top-0 left-0 overlay'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home