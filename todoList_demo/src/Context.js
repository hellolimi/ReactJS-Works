import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialList = [
    {
        id: 1,
        text: '리액트 사이트 구현하기',
        done: false
    },
    {
        id: 2,
        text: '정원 가꾸기',
        done: true
    },
    {
        id: 3,
        text: '아담 머리 잘라주기',
        done: false
    }
];

function listReducer(state, action) {
    switch(action.type){
        case 'CREATE':
            return state.concat(action.list);
        case 'TOGGLE':
            return state.map(list => list.id === action.id?{...list, done:!list.done}:list);
        case 'REMOVE':
            return state.filter(list => list.id !== action.id);
        default:
            throw new Error(`unhandled action type: ${action.type}`);
    };
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(listReducer, initialList);
    const nextId = useRef(4);
    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context
}

export function useNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context
}