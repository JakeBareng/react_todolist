import React from "react";
import ToDo from './ToDo.js'
const ToDoList = ({toDoList,toggle}) => {
    return (
        <div className="task-list">
            {
                toDoList.map(todo => {
                    return (<ToDo todo={todo} toggle={toggle} key={todo.id}/> )
                })

            }
        </div>
    )
} 

export default ToDoList