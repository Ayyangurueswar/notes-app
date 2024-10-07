import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes } from '../features/notes/notesSlice';
import Note from './Note';

const NotesList = () => {
  const { notes } = useSelector((state) => state.notes);
  const { user } = useSelector((state) => state.auth);
  const {searchTerm} = useSelector((state) => state.app);
  const [noteList, setNoteList] = useState(notes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes(user));
  }, [user, dispatch]);
  useEffect(() => {
    if(searchTerm){
        const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.text.toLowerCase().includes(searchTerm.toLowerCase()));
        setNoteList(filteredNotes);
    }else {
        setNoteList(notes);
    }
   }, [notes, searchTerm]);
  return (
    <div className='w-full px-6 max-w-[1250px] mx-auto grid grid-cols-3 gap-10 pb-6'>
        {
            noteList.map((note) => (
                <Note note={note} key={note._id}/>
            ))
        }
    </div>
  )
}

export default NotesList