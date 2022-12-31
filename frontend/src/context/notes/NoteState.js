import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: '63aeb9a0b9d077c60b1f4785',
      user: '63addecd685805402faf1e82',
      title: 'My 1 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:48.007Z',
      __v: 0,
    },
    {
      _id: '63aeb9a6b9d077c60b1f4787',
      user: '63addecd685805402faf1e82',
      title: 'My 2 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:54.337Z',
      __v: 0,
    },
    {
      _id: '63aeb9a0b9d077c60b1f4785',
      user: '63addecd685805402faf1e82',
      title: 'My 1 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:48.007Z',
      __v: 0,
    },
    {
      _id: '63aeb9a6b9d077c60b1f4787',
      user: '63addecd685805402faf1e82',
      title: 'My 2 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:54.337Z',
      __v: 0,
    },
    {
      _id: '63aeb9a0b9d077c60b1f4785',
      user: '63addecd685805402faf1e82',
      title: 'My 1 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:48.007Z',
      __v: 0,
    },
    {
      _id: '63aeb9a6b9d077c60b1f4787',
      user: '63addecd685805402faf1e82',
      title: 'My 2 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:54.337Z',
      __v: 0,
    },
    {
      _id: '63aeb9a0b9d077c60b1f4785',
      user: '63addecd685805402faf1e82',
      title: 'My 1 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:48.007Z',
      __v: 0,
    },
    {
      _id: '63aeb9a6b9d077c60b1f4787',
      user: '63addecd685805402faf1e82',
      title: 'My 2 title',
      description: 'please wake up early',
      tag: 'personal',
      Date: '2022-12-30T10:12:54.337Z',
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);
  return (
    <div>
      <noteContext.Provider value={{ notes, setNotes }}>{props.children}</noteContext.Provider>
    </div>
  );
};

export default NoteState;
