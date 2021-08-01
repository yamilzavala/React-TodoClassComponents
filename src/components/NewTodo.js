import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewTodo.css';

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { task: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }
    
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleCreate(evt) {
        evt.preventDefault();
        if (this.state.task !== "") {
            this.props.createTodo({...this.state, id: uuidv4(), complete: false});
            this.setState({ task: ""});
        }        
    }

    render() {

        return(
            <form onSubmit={this.handleCreate} className="NewTodoForm">                
                <input 
                    type='text'
                    placeholder='New todo'
                    value={this.state.task}
                    name='task'
                    id='task'
                    onChange={this.handleChange}/>
                <button>Add todo</button>
            </form>
        )
    }
}

export default NewTodo;