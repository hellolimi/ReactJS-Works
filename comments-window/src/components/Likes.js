import React, { useState } from 'react';
import {MdChatBubbleOutline, MdFavorite, MdFavoriteBorder} from 'react-icons/md';

function Likes({comments}) {
    const [likes, setLike] = useState(false);
    const likeClick = () => {
        setLike(!likes);
    }
    return (
        <div className="commentsTop">
            <button onClick={likeClick}>{likes?<MdFavorite style={{color:'rgb(255, 111, 111)'}}/>:<MdFavoriteBorder />}</button>
            <span className="commentCount"><span className="commentIcon"><MdChatBubbleOutline style={{color:'rgb(255, 111, 111)'}}/></span>{comments}</span>
        </div>
    );
}

export default React.memo(Likes);