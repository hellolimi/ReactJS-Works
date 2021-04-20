import React from 'react';
import { useTodoState } from '../Context';
import Items from './Items';

function List(){
    const todos = useTodoState();

    return(
        <div className="listBlock">
            {todos.map(list => {
                return(
                    <Items 
                        key={list.id}
                        id={list.id}
                        text={list.text}
                        done={list.done} 

                    />
                )
            })}
        </div>
    );
}

export default List;