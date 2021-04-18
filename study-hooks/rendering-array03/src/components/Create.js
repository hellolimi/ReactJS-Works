import React, { useContext, useRef } from 'react';
import { MemberDispatch } from '../App';
import useInputs from '../hooks/useInputs';

function Create() {
    const [{name, email}, onChange, reset] = useInputs({
        name: '',
        email: ''
    });
    const nextId = useRef(4);
    const dispatch = useContext(MemberDispatch);
    const onCreate = () => {
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
    }
    return (
        <div>
            <input 
                name="name" 
                placeholder="Enter your name"
                onChange={onChange}
                value={name}
            />
            <input
                name="email" 
                placeholder="Enter your email"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>Create</button>
        </div>
    );
}

export default React.memo(Create);