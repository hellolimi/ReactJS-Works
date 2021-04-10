import React, { useRef, useState, useCallback } from 'react';
import './App.css';
import List from './components/List';
import Create from './components/Create';
import Likes from './components/Likes';
import img from  './paris.jpg';

function App() {
  const [inputs, setInputs] = useState({
    nickname: '',
    words: ''
  });

  const {nickname, words} = inputs;

  const [comments, setComments] = useState([
    {
        id: 1,
        nickname: '리미',
        words: '우와 정말 멋있어요!',
        like: true
    },
    {
        id: 2,
        nickname: '아담이',
        words: '어디에 있는 가게인가요?',
        like: false
    }
  ]);

  const nextId = useRef(comments.length + 1);

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }

  const onCreate = () => {
    if(nickname<=0){
      alert('Please enter your nickname');
    }else if(words<=0){
      alert('Please enter comment');
    }else{
      const comment = {
        id: nextId.current,
        nickname,
        words,
        like: false
      }
      setComments(comments.concat(comment));
      setInputs({
        nickname: '',
        words: ''
      });
      nextId.current++;
    }
  };

  const onToggle =  id => {
    setComments(comments.map(comment => comment.id === id?{...comment, like:!comment.like}:comment ));
  }

  const counterComments = useCallback( comments => {
    return comments.length;
  }, []);

  const countComments = counterComments(comments);

  return (
    <div className="wrapper">
      <img src={img} alt="me in paris" />
      <Likes comments={countComments} />
      <Create nickname={nickname} words={words} onChange={onChange} onCreate={onCreate}/>
      <List comments={comments} onToggle={onToggle} />
    </div>
  );
}

export default React.memo(App);
