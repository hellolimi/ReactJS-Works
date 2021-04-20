import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import { useTodoDispatch } from '../Context';



function Items({id, done, text}) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type:'TOGGLE', id});
    const onRemove = () => dispatch({type:'REMOVE', id});
    return (
        <div className="itemBlock">
            <span className={done?"check check-active":"check"} onClick={onToggle}>{done && <MdDone/>}</span>
            <span className={done?"text text-active":"text"}>{text}</span>
            <span className="remove" onClick={onRemove}><MdDelete/></span>
        </div>
    );
}

export default React.memo(Items);