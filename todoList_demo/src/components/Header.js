import React from 'react';
import { useTodoState } from '../Context';

function Header(){
    const todos = useTodoState();
    const leftTasks = todos.filter(list => !list.done);
    
    const today = new Date();
    const dateString = today.toLocaleString('en-EN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const day = today.toLocaleString('en-EN', {
        weekday: 'short'
    });

    return(
        <div className="header">
            <div className="dateBox">
                <h2>{dateString}</h2>
                <span className="day">{day}</span>
            </div>
            <span className="leftTasks"><span className="bold">" {leftTasks.length} "</span>&nbsp; things left to do</span>
        </div>
    );
}

export default Header;