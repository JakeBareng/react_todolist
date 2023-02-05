import React from "react";
import ToDo from './ToDo.js'
const ToDoList = ({toDoList,toggle,editTask}) => {
    return (
        <div className="task-list">
            {
                toDoList.map(todo => {
                    return (<ToDo todo={todo} toggle={toggle} key={todo.id} editTask={editTask}/> )
                })

            }
        </div>
    )
} 

export default ToDoList