import React from 'react';
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Create from './components/Create';
import TodoProvider from './Context';
import './scss/common.scss';

function App() {
  return (
    <TodoProvider>
      <Template>
        <Header />
        <List>
        </List>
        <Create />
      </Template>
    </TodoProvider>
  );
}

export default App;
