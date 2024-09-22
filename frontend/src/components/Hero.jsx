import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.div className='w-full max-w-[1210px] mx-auto' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <div className='flex flex-col gap-10 ml-10'>
        <p className='text-5xl text-white font-semibold'>
            Save your thoughts, <span className='block mt-2'>any time, any where.</span>
        </p>
        <div>
            <Link to='/register' className='bg-indigo-600 text-xl text-white py-2 w-1/4 min-w-[250px] justify-center rounded-md flex items-center gap-3 group'>
            Get started <svg xmlns="http://www.w3.org/2000/svg" className='group-hover:translate-x-2 transition-all duration-300' width="30px" height="30px" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"/>
            </svg>
            </Link>
            <p className='text-white mt-2'>Already have an account? <Link to='/login' className='underline'>Sign in</Link></p>
        </div>
        </div>
    </motion.div>
  )
}

export default Hero