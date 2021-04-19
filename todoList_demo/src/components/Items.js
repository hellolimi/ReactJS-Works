import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';



function Items({id, done, text}) {
    return (
        <div className="itemBlock">
            <span className={done?"check check-active":"check"}>{done && <MdDone/>}</span>
            <span className={done?"text text-active":"text"}>{text}</span>
            <span className="remove"><MdDelete/></span>
        </div>
    );
}

export default Items;