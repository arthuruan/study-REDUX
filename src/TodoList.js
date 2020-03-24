import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; // disparar as ações
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';

class TodoList extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    state = {
        newTodoText: '',
    }

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        console.log(this.props.todos);

        this.setState({ newTodoText: '' });
    }

    render() {
        return (
            <div>
                <ul>
                    { this.props.todos.map(todo => (
                       <li key={todo.id}>{todo.text}</li> 
                    ))}
                </ul>

                <input 
                    type="text"
                    value={this.state.newTodoText}
                    onChange={(e) => this.setState({ newTodoText: e.target.value })}
                />
                
                <button onClick={this.addNewTodo}>
                    Novo Todo
                </button>
            </div>
        );
    }
}
//retorna a variavel que queremos ouvir do nosso estado
const mapStateToProps = state => ({
  todos: state.todos,
});

//trasnforma actions em propriedades do componente (this.props...)
const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);