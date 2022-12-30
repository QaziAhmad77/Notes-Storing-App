import { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
  const s1 = {
    name: 'Ahmad',
    class: '10B',
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({
        name: 'Qazi Ahmad',
        class: '2nd year',
      });
    }, 5000);
  };
  return (
    <div>
      <noteContext.Provider value={{ state, update }}>{props.children}</noteContext.Provider>
    </div>
  );
};

export default NoteState;
