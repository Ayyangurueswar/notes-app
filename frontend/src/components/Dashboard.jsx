import React, {useEffect} from 'react'
import Header from '../ui/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../features/auth/authSlice'
import AddNote from '../ui/AddNote'
import NotesList from '../ui/NotesList'

const Dashboard = () => {
  const {isLoading, isError, message, user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if(isError){
        alert(message);
    }
    if(!user){
        navigate('/login');
    }
    dispatch(reset());
  }, [isError, message, user, dispatch, navigate]);
  return (
    <div className='w-full flex flex-col gap-10'>
      <Header />
      <AddNote />
      <NotesList />
    </div>
  )
}

export default Dashboard