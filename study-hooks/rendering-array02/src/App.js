import React, { useRef, useMemo, useCallback, useReducer } from 'react';
import './App.css';
import List from './components/List';
import Create from './components/Create';
import useInputs from './hooks/useInputs';

function countActivatedMembers(members){
  console.log('활성 멤버 수를 세는 중');
  return members.filter(member => member.active).length;
};

const initialState = {
  inputs: {
    name: '',
    email: ''
  },
  members: [
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
  ]
}

function reducer(state, action){
  switch(action.type){
    case 'CREATE_MEMBER' :
        return {
          inputs: initialState.inputs,
          members: state.members.concat(action.member)
        };
    case 'TOGGLE_MEMBER' :
      return {
        ...state,
        members: state.members.map(member => member.id === action.id?{...member, active:!member.active}:member)
      }
    case 'REMOVE_MEMBER' :
        return {
          ...state,
          members: state.members.filter(member => member.id !== action.id)
        }    
    default :
      return state;
    
  };
}

function App() {
  const[{name, email}, onChange, reset] = useInputs({
    name: '',
    email: ''
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const {members} = state;
  
  const onCreate = useCallback(
    () => {
      dispatch({
        type: 'CREATE_MEMBER',
        member: {
          id: nextId.current,
          name,
          email
        }
      });
      reset();
      nextId.current++;
    },
    [name, email, reset]
  );
  
  const onToggle =  useCallback(
    id => {
      dispatch({
        type: 'TOGGLE_MEMBER',
        id
      });
    }, []);

  const onRemove = useCallback(
    id => {
      dispatch({
        type: 'REMOVE_MEMBER',
        id
      });
    }, []);

  const count = useMemo(() => 
    countActivatedMembers(members)
  , [members]);

  return (
    <>
      <Create name={name} email={email} onChange={onChange} onCreate={onCreate} />
      <List members={members} onRemove={onRemove} onToggle={onToggle} />
      <span>활성 멤버 수 : {count}</span>

    </>
  );
}

export default React.memo(App); //값 기억, 불필요한 리렌더링 방지
