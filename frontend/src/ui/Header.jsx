import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setSearchTerm, toggleLightMode, toggleListView } from '../features/extras/otherSlice'
import ListViewButton from './ListViewButton'
import ThemeToggleButton from './ThemeToggleButton'
import { logout } from '../features/auth/authSlice'
import SliderBtn from './SliderBtn'

const Header = () => {
  const {searchTerm, lightMode, listView} = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const handleListView = () => {
    dispatch(toggleListView());
  }
  const handleLightMode = () => {
    dispatch(toggleLightMode());
  }
  return (
    <div className='w-full max-w-[1250px] mx-auto md:px-10 px-3 md:py-5 py-4 flex items-center justify-between dark:text-white duration-500 sticky top-0 backdrop-blur'>
        <h1 className='font-semibold text-3xl max-sm:hidden'>Notes</h1>
        <SliderBtn />
        <div className='sm:w-2/5 w-7/12 max-sm:mx-auto relative -z-10'>
            <input className='w-full p-3 pr-[40px] outline-none rounded-md border-2 text-black border-slate-600' placeholder='Search your notes...' value={searchTerm}
            onChange={(e) => {dispatch(setSearchTerm(e.target.value))}}/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" className='absolute top-4 right-4'>
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className='flex items-center w-1/4 justify-between max-sm:hidden'>
            <ListViewButton handleListView={handleListView} listView={listView}/>
            <ThemeToggleButton handleLightMode={handleLightMode} lightMode={lightMode}/>
            <button className='hover:dark:bg-white hover:bg-indigo-600 hover:text-white hover:dark:text-black px-4 py-1 transition duration-500 rounded-md' onClick={() => {dispatch(logout())}}>Logout</button>
        </div>
    </div>
  )
}

export default Header