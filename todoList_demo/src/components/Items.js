import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';



function Items({id, done, text}) {
    return (
        <div className="itemBlock">
            <span className={done===1?"check check-active":"check"} done={done}>{done===1 && <MdDone/>}</span>
            <span className={done===1?"text text-active":"text"} done={done}>{text}</span>
            <span className="remove"><MdDelete/></span>
        </div>
    );
}

export default Items;