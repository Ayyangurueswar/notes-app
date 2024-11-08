import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'

const Register = () => {
  const dispatch = useDispatch();
  const {user, isLoading, isError, message} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = () => {
    if(password !== confirmPassword){
        alert('Passwords do not match');
        return;
    }
    dispatch(register({name, email, password}));
  }
  useEffect(() => {
    if(isError){
        alert(message);
    }
    if(user){
        navigate('/dashboard');
    }
    dispatch(reset());
  }, [isError, user, navigate, dispatch, message]);
  return (
    <motion.div className='w-full max-w-[1210px] mx-auto px-5 py-2 flex flex-col gap-6 items-center' initial={{x: -200}} animate={{x: 0}} exit={{x: 200}}>
        <h1 className='text-white text-4xl font-semibold'>Register</h1>
        <form className='flex flex-col gap-3'>
            <div>
                <label htmlFor='name' className='text-white mb-2'>Name</label>
                <input type='text' id='name' className='w-full px-4 py-2 outline-none rounded-md text-black' placeholder='Enter your name' 
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email' className='text-white mb-2'>Email</label>
                <input type='email' id='email' className='w-full px-4 py-2 outline-none rounded-md text-black' placeholder='Enter your email' 
                value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='password' className='text-white mb-2'>Password</label>
                <input type='password' id='password' className='w-full px-4 py-2 outline-none rounded-md text-black' placeholder='Enter your password' 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='confirmPassword' className='text-white mb-2'>Confirm Password</label>
                <input type='password' id='confirmPassword' className='w-full px-4 py-2 outline-none rounded-md text-black' placeholder='Enter your password' 
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
        </form>
        <button className='w-1/5 px-4 py-2 text-white hover:bg-indigo-800 transition-colors duration-300 font-semibold bg-indigo-600 rounded-md' onClick={handleSubmit} disabled={isLoading}>Register</button>
        <p className='text-white'>Already have an account? <Link className='underline' to='/login'>Login</Link></p>    
    </motion.div>
  )
}

export default Register