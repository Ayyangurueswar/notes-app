import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../features/notes/notesSlice'

const AddNote = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editing, setEditing] = useState(true)
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const handleSaveNote = () => {
    const obj = {
      title,
      text: content,
      user: user.token
    }
    dispatch(addNote(obj));
    setTitle('');
    setContent('');
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleContentChange = (e) => {
    setContent(e.target.value)
  }
  const changeHeight = (e) => {
    const textArea = e.target;
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
  }
  return (
    <div className={`max-w-[600px] w-3/4 min-h-[250px] h-auto mx-auto border-2 dark:border-slate-200 border-indigo-400 rounded-md px-4 ${editing && 'flex items-center justify-center'} shadow-md dark:shadow-slate-200 shadow-indigo-700`}>
        {
            editing ?
                <button onClick={() => {setEditing(false)}} className='w-[50px] h-[50px] rounded-full text-2xl border-2 border-indigo-500 hover:shadow-md hover:shadow-indigo-700 transition duration-500'>
                  <span className='block -mt-1'>+</span>
                </button>
             : (
                <>
                    <input className='w-full py-3 outline-none text-xl bg-transparent' placeholder='Enter title...' onChange={handleTitleChange} value={title}/>
                    <hr className='h-[1px] bg-slate-500'/>
                    <textarea className='w-full py-3 outline-none h-full bg-transparent resize-none min-h-[100px]'  placeholder='Enter content...' onInput={changeHeight} onChange={handleContentChange} value={content}/>
                    <hr className='h-0.5 bg-slate-600'/>
                    <div className='w-full flex items-center justify-end gap-5 py-5'>
                        <motion.button className='px-6 py-1.5 bg-red-500 text-white rounded-md' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={() => {setEditing(true)}}>Cancel</motion.button>
                        <motion.button className='px-6 py-1.5 bg-green-500 text-white rounded-md' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={handleSaveNote}>Save</motion.button>
                    </div>
                </>
            )
        }
    </div>
  )
}

export default AddNote