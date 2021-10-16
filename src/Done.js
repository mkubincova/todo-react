import React from 'react';

const Done = ({dones, deleteDone, moveToTodo}) => {
    const doneList = dones.length ? (
        dones.map(done => {
            return(
                <div className="todo-item finished" key={done.id}>
                    <div className="back" onClick={() => {moveToTodo(done)}}></div>
                    <span>{done.content}</span>
                    <div className="delete" onClick={() => {deleteDone(done.id)}}></div>
                </div>
            )
        })
    ) : (
        null
    )
    return(
        <div>
            <h2>Finished</h2>
            <div className="todos finished">
             {doneList}
            </div> 
        </div>
    );
}

export default Done;