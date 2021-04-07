import React from 'react';
import './css/main.css';
import cat from './images/cat.jpg'

function Main(props){
    return(
        <div className="main">
            <img src={cat} alt="cat" />
            <p>Hello, it's Lim! I am currently studying React.js.</p>
        </div>
    );
}

export default Main;