import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
  const host = 'http://localhost:4000';
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  const getAllNotes = async () => {
    console.log('Adding new note');
    const response = await fetch(`${host}/api/notes/createNote`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJBTkFTIiwiZW1haWwiOiJhbmFzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDJVN0hnanJSczg4QnFjVHFiS1pUTnVxWUlneWZSMFdGbzl1TldPNk9OOVcweE0xZzRVZ3IuIiwiX2lkIjoiNjNhZjRhNjkyMDE5MzA1ZDQ0M2MxMWNmIiwidGltZSI6IjIwMjItMTItMzBUMjA6MzA6MzMuOTk4WiIsIl9fdiI6MH0sImlhdCI6MTY3MjQzMjIzNCwiZXhwIjoxNjcyNDM1ODM0fQ.Zc1djMkFsFnm5Cqsbm5EI9BClgHhzwwDTZZxeow4Gm4',
      },
      body: JSON.stringify(),
    });
    const json = await response.json();
    console.log(json);
  };

  const addNote = async (title, description, tag) => {
    console.log('Adding new note');
    const response = await fetch(`${host}/api/notes/createNote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJBTkFTIiwiZW1haWwiOiJhbmFzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDJVN0hnanJSczg4QnFjVHFiS1pUTnVxWUlneWZSMFdGbzl1TldPNk9OOVcweE0xZzRVZ3IuIiwiX2lkIjoiNjNhZjRhNjkyMDE5MzA1ZDQ0M2MxMWNmIiwidGltZSI6IjIwMjItMTItMzBUMjA6MzA6MzMuOTk4WiIsIl9fdiI6MH0sImlhdCI6MTY3MjQzMjIzNCwiZXhwIjoxNjcyNDM1ODM0fQ.Zc1djMkFsFnm5Cqsbm5EI9BClgHhzwwDTZZxeow4Gm4',
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: '63aeb9a6b9d077c6d0b1f4787',
      user: '63addecd685805402faf1e82',
      title: 'My 2 titleAdded',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:54.337Z',
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  const deleteNote = (id) => {
    console.log('Delete note with id  ' + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJBTkFTIiwiZW1haWwiOiJhbmFzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEyJDJVN0hnanJSczg4QnFjVHFiS1pUTnVxWUlneWZSMFdGbzl1TldPNk9OOVcweE0xZzRVZ3IuIiwiX2lkIjoiNjNhZjRhNjkyMDE5MzA1ZDQ0M2MxMWNmIiwidGltZSI6IjIwMjItMTItMzBUMjA6MzA6MzMuOTk4WiIsIl9fdiI6MH0sImlhdCI6MTY3MjQzMjIzNCwiZXhwIjoxNjcyNDM1ODM0fQ.Zc1djMkFsFnm5Cqsbm5EI9BClgHhzwwDTZZxeow4Gm4',
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if ((element._id = id)) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <div>
      <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, getAllNotes }}>{props.children}</noteContext.Provider>
    </div>
  );
};

export default NoteState;
