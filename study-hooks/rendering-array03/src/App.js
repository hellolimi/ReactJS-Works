import React, { useMemo, useReducer } from 'react';
import './App.css';
import List from './components/List';
import Create from './components/Create';
import produce from 'immer';

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

export const MemberDispatch = React.createContext(null);

function reducer(state, action){
  switch(action.type){
    case 'CREATE_MEMBER' :
        return produce(state, draft => {
          draft.members.push(action.member);
        });
        /* {
          inputs: initialState.inputs,
          members: state.members.concat(action.member)
        }; */
    case 'TOGGLE_MEMBER' :
      return produce(state, draft => {
        const member = draft.members.find(member => member.id === action.id);
        member.active = !member.active;
      });
      
      /* {
        ...state,
        members: state.members.map(member => member.id === action.id?{...member, active:!member.active}:member)
      } */
    case 'REMOVE_MEMBER' :
        return produce(state, draft => {
          const index = draft.members.findIndex(member => member.id === action.id);
          draft.members.splice(index, 1);
        });   
    default :
      return state;
    
  };
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {members} = state;
  
/*   const onCreate = useCallback(
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
  ); */

  const count = useMemo(() => 
    countActivatedMembers(members)
  , [members]);

  return (
    <>
      <MemberDispatch.Provider value={dispatch}>
        <Create />
        <List members={members} />
        <span>활성 멤버 수 : {count}</span>
      </MemberDispatch.Provider>
    </>
  );
}

export default React.memo(App); //값 기억, 불필요한 리렌더링 방지
