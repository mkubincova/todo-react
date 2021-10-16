import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Done from "./Done";

class App extends React.Component {
  state = {
    todos: [
      {id:1, content: "go grocery shopping"},
      {id:2, content: "clean the apartment"},
      {id:3, content: "water ALL plants!"}
    ],
    dones: [
      {id:4, content: "find a new TV show"},
      {id:9, content: "walk the dog"}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    })
  }
  deleteDone = (id) => {
    const dones = this.state.dones.filter(done => {
      return done.id !== id;
    });
    this.setState({
      dones: dones
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  moveToDone = (todo) => {
    let dones = [...this.state.dones, todo];
    this.setState({
      dones: dones
    })
    this.deleteTodo(todo.id)
  }
  moveToTodo = (done) => {
    let todos = [...this.state.todos, done];
    this.setState({
      todos: todos
    })
    this.deleteDone(done.id)
  }
  render(){
    return (
      <div className="todo-app">
        <h1 className="center blue-text">Your To-Do list</h1>
        <AddTodo addTodo={this.addTodo}/>
        <div className="container">
          <div className="container-item">
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} moveToDone={this.moveToDone}/>
          </div>
          <div className="container-item">
            <Done dones={this.state.dones} deleteDone={this.deleteDone} moveToTodo={this.moveToTodo}/>
          </div> 
        </div>
        
      </div>
    );
  }
  
}

export default App;
