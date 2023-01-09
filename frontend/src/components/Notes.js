import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNotes } = context;
  useEffect(()=>{
    getAllNotes();
  },[])
  return (
    <>
      <div className='row'>
        <AddNote />
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
}

export default Notes;
