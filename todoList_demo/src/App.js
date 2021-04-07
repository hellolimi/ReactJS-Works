import React from 'react';
import Template from './components/Template';
import Header from './components/Header';
import List from './components/List';
import Create from './components/Create';
import './scss/common.scss';

function App() {
  return (
    <Template>
      <Header />
      <List>
      </List>
      <Create />
    </Template>
  );
}

export default App;
