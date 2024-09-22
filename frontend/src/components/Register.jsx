import React from 'react'
import { motion } from 'framer-motion'

const Register = () => {
  return (
    <motion.div className='w-full max-w-[1210px] mx-auto px-5 py-2 flex flex-col gap-6 items-center' initial={{x: -200}} animate={{x: 0}} exit={{x: 200}}>
        <h1 className='text-white text-4xl font-semibold'>Register</h1>
        <form className='flex flex-col gap-3'>
            <div>
                <label htmlFor='name' className='text-white mb-2'>Name</label>
                <input type='text' id='name' className='w-full px-4 py-2 outline-none rounded-md' placeholder='Enter your name' />
            </div>
            <div>
                <label htmlFor='email' className='text-white mb-2'>Email</label>
                <input type='email' id='email' className='w-full px-4 py-2 outline-none rounded-md' placeholder='Enter your email' />
            </div>
            <div>
                <label htmlFor='password' className='text-white mb-2'>Password</label>
                <input type='password' id='password' className='w-full px-4 py-2 outline-none rounded-md' placeholder='Enter your password' />
            </div>
            <div>
                <label htmlFor='confirmPassword' className='text-white mb-2'>Confirm Password</label>
                <input type='password' id='confirmPassword' className='w-full px-4 py-2 outline-none rounded-md' placeholder='Enter your password' />
            </div>
        </form>
        <button className='w-1/5 px-4 py-2 text-white hover:bg-indigo-800 transition-colors duration-300 font-semibold bg-indigo-600 rounded-md'>Register</button>    
    </motion.div>
  )
}

export default Register