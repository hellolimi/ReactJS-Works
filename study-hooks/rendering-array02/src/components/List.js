import React, { useContext } from 'react';
import { MemberDispatch } from '../App';

function Member({member}){
    const dispatch = useContext(MemberDispatch);

    return(
        <div className="member" style={{cursor:'pointer', color:member.active&&'green'}}>
            <span>Member Name : {member.name}</span>
            <span>Member Email : {member.email}</span>
            <button onClick={() => (dispatch({type:'REMOVE_MEMBER', id: member.id}))}>Remove</button>
            <button onClick={() => (dispatch({type:'TOGGLE_MEMBER', id:member.id}))}>Update</button>
        </div>
    );
}

function List({members}) {

    return (
        <>
            {members.map(member => <Member member={member} key={member.id} />)}
        </>
    );
}

export default React.memo(List);