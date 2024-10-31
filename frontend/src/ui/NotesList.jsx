import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes, reset } from '../features/notes/notesSlice';
import Note from './Note';

const NotesList = () => {
  const { notes, isLoading, isError, message } = useSelector((state) => state.notes);
  const { user } = useSelector((state) => state.auth);
  const {searchTerm, listView} = useSelector((state) => state.app);
  const [noteList, setNoteList] = useState(notes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes(user));
    if(isError){
      alert(message);
      dispatch(reset());
    }
  }, [user, dispatch, isError, message]);
  useEffect(() => {
    if(searchTerm){
        const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.text.toLowerCase().includes(searchTerm.toLowerCase()));
        setNoteList(filteredNotes);
    }else {
        setNoteList(notes);
    }
   }, [notes, searchTerm]);
  return (
    <div className={`w-full px-6 mx-auto grid gap-10 pb-6 ${listView ? 'grid-cols-1 max-w-[900px]' : 'xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 max-w-[1250px]'}`}>
        {
            isLoading ? <div className='text-center text-lg font-semibold'>Loading...</div> : noteList.length > 0 ? noteList.map((note) => (
                <Note note={note} key={note._id} user={user}/>
            )) : (
              <div className='text-center text-lg font-semibold'>No notes found.</div>
            )
        }
    </div>
  )
}

export default NotesList