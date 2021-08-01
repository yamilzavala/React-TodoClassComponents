import React, {Component} from 'react';
import './Todo.css'

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
        console.log('complete', {complete: !this.state.complete});
        this.setState({complete: !this.state.complete});
    }
    
    render() {   
        let result;     
        if (this.state.isEditing) {
            result =  (
                      <div className="Todo">
                        <form onSubmit={this.handleSave} className="Todo-edit-form">
                            <input name="task" value={this.state.task} type="text" onChange={this.handleChange}/>
                            <button>Save</button>
                        </form>
                      </div> 
                      );      
        } else {
            result =  (
                       <div className="Todo">
                            <li onClick={this.handleComplete} className={this.state.complete ? "Todo-task completed" : "Todo-task"}>
                                {this.props.task}
                            </li>    
                            <div className="Todo-buttons">
                                <button onClick={this.handleToggle}>                                    
                                    Edit
                                    {/* <i class='fas fa-pen'/> */}
                                </button>
                                <button onClick={this.handleRemove}>
                                    X
                                    {/* <i class='fas fa-trash'/> */}
                                </button>
                            </div>                                   
                       </div> );
        }
        return(           
            result
        )
    }
}

export default Todo;