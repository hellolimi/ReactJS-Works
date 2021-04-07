import React, {useState} from 'react';

const initialCount = {count : 0};

function Counter2(){
  const [state, setCount] = useState(initialCount);

  const derement = () => {
    setCount({count : state.count - 1});
  }

  const increment = () => {
    setCount({count : state.count + 1});
  }

  const reset = () => {
    setCount(initialCount);
  }


  return(
    <div>
      <h1>Counter 2 created with useState</h1>
      <div className="counter">
        <button onClick={derement}>-</button>
        <span>Count: {state.count}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
}

export default Counter2;


/* const [state, setState] = useState(initialState); 

//setState(newState);

function Counter({initialCount}) {
  c
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

setState(prevState => {
  // Object.assign would also work
  return {...prevState, ...updatedValues};
});
 */