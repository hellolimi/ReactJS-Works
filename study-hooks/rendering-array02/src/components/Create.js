import React from 'react';

function Create({name, email, onChange, onCreate}) {
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