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
        if(value.length===0){
            alert('Please fill the blank to create a list'); 
        }else if(value.length > 0){
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
    }

    return (
        <>
            <div className={open?'createBlock active':'createBlock'}>
                <form className="inputForm" onSubmit={onSubmit}>
                    <input autoFocus placeholder="Write down your to-do list." onChange={onChange} value={value} />
                    <button type="submit" className="submit">ADD</button>
                </form>
            </div>
            <button className={open?"inputButton active":"inputButton"} onClick={onToggle} open={open}><MdAdd /></button>
        </>
    );
}

export default Create;