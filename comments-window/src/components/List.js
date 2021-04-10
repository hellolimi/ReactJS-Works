import React from 'react';
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md';

function Comment({comment, onToggle}) {
    return(
        <div className="comment">
            <span className="nickname">{comment.nickname}</span>
            <span className="words">{comment.words}</span>
            <button className="like" onClick={() => onToggle(comment.id)}>{comment.like?<MdFavorite style={{color:'rgb(255, 111, 111)'}} />:<MdFavoriteBorder />}</button>
        </div>
    );
}

function List({comments, onToggle}) {
    const reverse = [...comments].reverse();
    return (
        <div className="comments">
            {reverse.map(comment => <Comment comment={comment} key={comment.id} onToggle={onToggle} />)}
        </div>
    );
}

export default React.memo(List);