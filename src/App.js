import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Done from "./Done";

class App extends React.Component {
  state = {
    todos: window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [],
    dones: window.localStorage.getItem('dones') ? JSON.parse(window.localStorage.getItem('dones')) : [],
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    })
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }
  deleteDone = (id) => {
    const dones = this.state.dones.filter(done => {
      return done.id !== id;
    });
    this.setState({
      dones: dones
    })
    window.localStorage.setItem('dones', JSON.stringify(dones));
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }
  moveToDone = (todo) => {
    let dones = [...this.state.dones, todo];
    this.setState({
      dones: dones
    })
    this.deleteTodo(todo.id)
    window.localStorage.setItem('dones', JSON.stringify(dones));
  }
  moveToTodo = (done) => {
    let todos = [...this.state.todos, done];
    this.setState({
      todos: todos
    })
    this.deleteDone(done.id)
    window.localStorage.setItem('todos', JSON.stringify(todos));
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
