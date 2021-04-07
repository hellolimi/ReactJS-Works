import React from 'react';
import './css/sub.css';
import htmlImg from './images/html.png';
import cssImg from './images/css.png';
import jsImg from './images/js.png';
import reactImg from './images/react.png';

const subData = {
    html : {
        title : `HTML`,
        description : `HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page.`,
        img : htmlImg
    },
    css : {
        title : `CSS`,
        description : `Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`,
        img : cssImg
    },
    js : {
        title : `JavaScript`,
        description : `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.`,
        img : jsImg
    },
    react : {
        title : `React`,
        description : `React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.`,
        img : reactImg
    }
}

function Sub({match}){
    const {lang} = match.params; //this.props.match.params.lang
    const sub = subData[lang];
    return(
        <div className="subWrapper">
            <div className="contents">
                <img src={sub.img} alt={sub.title}  />
                <div className="textBox">
                    <h2>{sub.title}</h2>
                    <p>{sub.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Sub;