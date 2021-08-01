import React, {Component} from 'react';
import {completeTodo} from './Todo.css'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false, 
            task: this.props.task,
            complete: this.props.complete
        }        
        this.handleRemove = this.handleRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleRemove() {        
        this.props.removeTodo(this.props.id)
    }

    handleToggle() {
        this.setState({isEditing: !this.state.isEditing});       
    }

    handleSave(evt) {
        evt.preventDefault();       
        this.props.updateTodo(this.state.task, this.props.id)
        this.setState({'isEditing': false})
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleComplete() {
        console.log('complete');
        this.setState({complete: !this.state.complete});
    }
    
    render() {   
        let result;     
        if (this.state.isEditing) {
            result =  (
                      <div>
                        <form onSubmit={this.handleSave}>
                            <input name="task" value={this.state.task} type="text" onChange={this.handleChange}/>
                            <button>Save</button>
                        </form>
                      </div> 
                      );      
        } else {
            result =  (
                       <div>
                        <button onClick={this.handleToggle}>Edit</button>
                        <button onClick={this.handleRemove}>X</button>
                        <li onClick={this.handleComplete} className={this.state.complete ? 'completeTodo' : ''}>
                            {this.props.task}
                        </li>               
                       </div> );
        }
        return(           
            result
        )
    }
}

export default Todo;