import React, {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import {useDispatch} from 'react-redux'
import {deleteNote, editNote} from '../features/notes/notesSlice.js'

const Note = ({note, user}) => {
  const [editing, setEditing] = useState("false");
  const titleRef = useRef();
  const textRef = useRef();
  const dispatch = useDispatch();
  const handleSave = () => {
    if (titleRef.current.innerText.trim() === '') {
      alert('Title cannot be empty');
      return;
    }
    dispatch(editNote({
      userId: user.token,
      note: {
        id: note._id,
        title: titleRef.current.innerText,
        text: textRef.current.innerText
      }
    }))
    setEditing("false");
  }
  const handleDelete = () => {
    dispatch(deleteNote({
      userId: user.token,
      noteId: note._id
    }));
  }
  return (
        <motion.div className='border-2 border-slate-500 shadow-md shadow-slate-500 rounded-md p-4 flex flex-col gap-5' layout>
            <h2 className='text-xl font-semibold outline-none' ref={titleRef} contentEditable={editing}>{note.title}</h2>
            <p className='outline-none' contentEditable={editing} ref={textRef}>{note.text}</p>
            <div className='w-full flex items-center gap-5 justify-end mt-auto'>
                {
                    editing === "true" ?
                        <motion.button onClick={handleSave} className='px-4 py-1 bg-green-500 text-white rounded-md' 
                        whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Save</motion.button>
                    :
                        <motion.button onClick={() => {setEditing("true")}} className='px-4 py-1 bg-indigo-700 text-white rounded-md' 
                        whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Edit</motion.button>
                }
                <motion.button className='px-4 py-1 bg-red-500 text-white rounded-md' 
                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} onClick={handleDelete}>Delete</motion.button>
            </div>
        </motion.div>
  )
}

export default Note