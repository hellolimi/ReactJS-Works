import React, { useReducer } from 'react';

initialList = [
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
            return state.map(list => list.id === id?{...list, done:!done}:list);
        case 'REMOVE':
            return state.filter(list => list.id !== action.id);
        default:
            throw new Error(`unhandled action type: ${action.type}`);
    };
}

export function Provider({children}){
    const [state, dispatch] = useReducer(listReducer, initialList);
    return children;
};