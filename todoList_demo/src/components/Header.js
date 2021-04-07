import React from 'react';

function Header(){
    return(
        <div className="header">
            <h2>2021년 4월 7일</h2>
            <span className="day">Wednesday</span>
            <span className="leftTasks">오늘 할 일이 O개 남았습니다.</span>
        </div>
    );
}

export default Header;