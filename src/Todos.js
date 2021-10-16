import React from 'react';

const Todos = ({todos, deleteTodo, moveToDone}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="todo-item" key={todo.id}>
                    <div className="done" onClick={() => {moveToDone(todo)}}></div>
                    <span>{todo.content}</span>
                    <div className="delete" onClick={() => {deleteTodo(todo.id)}}></div>
                </div>
            )
        })
    ) : (
        <div className="todo-item empty">All done! Now get some rest :)</div>
    )
    return(
        <div>
            <h2>Upcoming</h2>
            <div className="todos">
             {todoList}
            </div> 
        </div>
    );
}

export default Todos;