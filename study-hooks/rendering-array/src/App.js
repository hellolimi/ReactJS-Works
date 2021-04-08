import { useRef, useState } from 'react';
import './App.css';
import List from './List';
import Create from './Create';

function App() {
 
  const [inputs, setInputs] = useState({
    name: '',
    email: ''
  });

  const{name, email} = inputs;

  const onChange = (e) => {
    const{ name, value } = e.target;
    setInputs({...inputs, [name]: value});
  }

  const [members, setMembers] = useState([
    {
        id: 1,
        name: 'Adam',
        email: 'adamneillaughton@gmail.com',
        active: true
    },
    {
        id: 2,
        name: 'Lim',
        email: 'ltbllim@gmail.com',
        active: false
    },
    {
        id: 3,
        name: 'Beau',
        email: 'beaucutie@gmail.com',
        active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const member = {
      id: nextId.current,
      name,
      email
    }
    setMembers(members.concat(member)); //setMembers([...members, member]);
    setInputs({name: '', email:''});
    nextId.current++;
  }

  const onRemove = id => {
    setMembers(members.filter(member => (member.id !== id)))
  }

  const onToggle =  id => {
    setMembers(members.map(member => member.id === id?{...member, active:!member.active}:member ));
  }

  return (
    <>
      <Create name={name} email={email} onChange={onChange} onCreate={onCreate} />
      <List members={members} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
