import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLoading, isError, message, user} = useSelector((state) => state.auth);
  const handleSubmit = () => {
    dispatch(login({email, password}));
  }
  useEffect(() => {
    if(isError){
        alert(message);
    }
    if(user){
        navigate('/dashboard');
    }
    dispatch(reset());
  }, [isError, message, user, dispatch, navigate]);
  return (
    <motion.div className='w-full max-w-[1210px] mx-auto px-5 py-2 flex flex-col gap-6 items-center' initial={{x: -200}} animate={{x: 0}} exit={{x: 200}}>
        <h1 className='text-white text-4xl font-semibold'>Login</h1>
        <form className='flex flex-col gap-3'>
            <div>
                <label htmlFor='email' className='mb-2 text-white'>Email</label>
                <input type='email' id='email' className='w-full px-4 py-2 outline-none rounded-md text-black' placeholder='Enter your email' 
                onChange={(e) => {setEmail(e.target.value)}} value={email}/>
            </div>
            <div>
                <label htmlFor='password' className='mb-2 text-white'>Password</label>
                <input type='password' id='password' className='w-full px-4 py-2 outline-none rounded-md text-black' placeholder='Enter your password' 
                onChange={(e) => {setPassword(e.target.value)}} value={password}/>
            </div>
        </form>
        <button className='w-1/5 px-4 py-2 text-white hover:bg-indigo-800 transition-colors duration-300 font-semibold bg-indigo-600 rounded-md' onClick={handleSubmit} disabled={isLoading}>Login</button>    
    </motion.div>
  )
}

export default Login