import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { logout } from '../features/auth/authSlice'
import { toggleLightMode } from '../features/extras/otherSlice'
import { useDispatch } from 'react-redux'

const Slider = ({show, handleClose}) => {
  const dispatch = useDispatch();
  const containerVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
            delayChildren: 0.7,
            duration: 1.5
        }
    }
  }
  const itemVariant = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    show: {
        opacity: 1,
        y: 0,
    }
  }
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  }
  const handleToggleLightMode = () => {
    dispatch(toggleLightMode());
    handleClose();
  }
  return (
    <AnimatePresence mode='wait'>
        {
            show && (
                <motion.div className={`h-screen absolute top-0 left-0 z-10 dark:bg-black bg-white`} initial={{width: 0}} animate={{width: 300}} exit={{width: 0}}>
                    <motion.div className={`w-full flex items-center justify-between px-6 py-5`} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                        <h1 className='font-semibold text-3xl'>Notes</h1>
                        <button onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </motion.div>
                    <motion.ul variants={containerVariant} initial="hidden" animate="show" exit={{opacity: 0}} className='flex flex-col gap-3'>
                        <motion.li variants={itemVariant} initial="hidden" animate="show" exit={{y: -20, opacity: 0}} className='px-6 py-2'>
                            <button onClick={handleToggleLightMode}>Switch theme</button>
                        </motion.li>
                        <motion.li variants={itemVariant} initial="hidden" animate="show" exit={{y: -20, opacity: 0}} className='px-6 py-2'>
                            <button onClick={handleLogout}>Logout</button>
                        </motion.li>
                    </motion.ul>
            </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default Slider