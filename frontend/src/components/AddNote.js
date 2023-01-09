import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: '', description: '', tag: '' });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
  };
  const onChange = (e) => {
    // const name = event.target.name;
    // const value = event.target.value;
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className='container'>
      <h2>Add a Note</h2>
      <form className='my=3'>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input type='text' className='form-control' id='title' name='title' onChange={onChange} aria-describedby='emailHelp' />
          <div id='emailHelp' className='form-text'></div>
        </div>
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input type='text' className='form-control' onChange={onChange} id='description' name='description' />
        </div>
        <div className='mb-3 form-check'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary' onClick={handleClick}>
          Add note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
