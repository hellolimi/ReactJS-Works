import React, { useReducer } from 'react';

const ACTIONS = {
  DECREMENT : 'decrement',
  INCREMENT : 'increment',
  RESET : 'reset'
}

const initialCount = {count : 0};

function reducer(state, action){
  switch(action.type){
    case ACTIONS.DECREMENT:
      return {count : state.count - 1}; //reducer returns new state/ to return new state as Object
    case ACTIONS.INCREMENT:
      return {count : state.count + 1};
    case ACTIONS.RESET:
      return state = initialCount;
    default:
      return state.count
  }
}

function Counter1(props) {
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <h1>Counter 1 created with useReducer</h1>
      <div className="counter">
        <button onClick={() => dispatch({type : ACTIONS.DECREMENT})}>-</button>
        <span>Count : {state.count}</span>
        <button onClick={() => dispatch({type : ACTIONS.INCREMENT})}>+</button>
        <button onClick={() => dispatch({type : ACTIONS.RESET})}>RESET</button>
      </div>
    </div>
  );
}

export default Counter1;
