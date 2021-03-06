import React from 'react';

function Member({member, onRemove, onToggle}){
    return(
        <div className="member" style={{cursor:'pointer', color:member.active&&'green'}}>
            <span>Member Name : {member.name}</span>
            <span>Member Email : {member.email}</span>
            <button onClick={() => onRemove(member.id)}>Remove</button>
            <button onClick={() => onToggle(member.id)}>Update</button>
        </div>
    );
}

function List({members, onRemove, onToggle}) {

    return (
        <>
            {members.map(member => <Member member={member} key={member.id} onRemove={onRemove} onToggle={onToggle} />)}
        </>
    );
}

export default List;