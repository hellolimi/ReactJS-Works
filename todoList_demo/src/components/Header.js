import React from 'react';
import { useTodoState } from '../Context';

function Header(){
    const todos = useTodoState();
    const leftTasks = todos.filter(list => !list.done);
    
    const today = new Date();
    const dateString = today.toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const day = today.toLocaleString('en-EN', {
        weekday: 'long'
    });

    return(
        <div className="header">
            <h2>{dateString}</h2>
            <span className="day">{day}</span>
            <span className="leftTasks">오늘 할 일이 {leftTasks.length}개 남았습니다.</span>
        </div>
    );
}

export default Header;