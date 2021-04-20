import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useNextId, useTodoDispatch } from '../Context';

function Create() {
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE', 
            list: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current ++;
    }

    return (
        <>
            {open && (
                <div className="createBlock">
                    <form className="inputForm" onSubmit={onSubmit}>
                        <input autoFocus placeholder="오늘 해야 할 일을 입력한 후 Enter를 누르세요." onChange={onChange} value={value}/>
                    </form>
                </div>
            )}
            <button className={open?"inputButton active":"inputButton"} onClick={onToggle} open={open}><MdAdd /></button>
        </>
    );
}

export default Create;