import React from "react";

class AddTodo extends React.Component {
    state = {
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new task:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;