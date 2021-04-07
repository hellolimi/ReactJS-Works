import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

function Create() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <>
            {open && (
                <div className="createBlock">
                    <div className="inputForm">
                        <input autoFocus placeholder="오늘 해야 할 일을 입력한 후 Enter를 누르세요." />
                    </div>
                </div>
            )}
            <button className={open?"inputButton active":"inputButton"} onClick={onToggle} open={open}><MdAdd /></button>
        </>
    );
}

export default Create;