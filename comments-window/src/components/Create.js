import React from 'react';

function Create({ nickname, words, onChange, onCreate }) {
    const pressEnter = (e) => {
        if(e.key === 'Enter'){
            onCreate();
        }
    }
    return (
        <div className="form">
            <span id="nickname">
                <input type="text" name="nickname" placeholder="Your nickname" value={nickname} onChange={onChange} />
            </span>
            <span id="words">
                <input type="text" name="words" placeholder="Leave a comment" value={words} onChange={onChange} 
                onKeyPress={(e)=>{pressEnter(e)}} />
            </span>
            <button className="create" onClick={onCreate} >Create</button>
        </div>
       
    );
}

export default Create;