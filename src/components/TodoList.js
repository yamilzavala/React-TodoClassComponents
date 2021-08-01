import React, {Component} from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }

    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    remove(idTodo){
        const filteredArray = this.state.todos.filter(todo => todo.id !== idTodo);
        this.setState({ todos: filteredArray});
    }

    update(taskUpdate, id){
        const newState = this.state.todos.map(todo => {
            if(todo.id === id) {               
                return {...todo, task: taskUpdate};
            } 
            return todo            
        });
        this.setState({todos: newState});
    }

    render() {
        const todos = this.state.todos.map(todo => { 
            return <Todo task={todo.task} id={todo.id} removeTodo={this.remove} updateTodo={this.update} complete={todo.complete}/>
        });

        return(
            <div>
                <h6>Todos:</h6>
                <NewTodo createTodo={this.create}/>
                <ul>{todos}</ul>                
            </div>
        )
    }
}

export default TodoList;