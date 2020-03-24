import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
/* 
  Provider - atualiza os componentes da aplicação quando 
  houver alguma alteração no estado da aplicação
*/ 

import store from './store';
import TodoList from './TodoList';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
        <Counter />
      </Provider>
    );
  }
}