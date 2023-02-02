import React from "react";
import ToDo from './ToDo.js'
const ToDoList = ({toDoList}) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (<ToDo todo={todo} toggle={toDoList.toggle}/> )
                })

            }
        </div>
    )
} 

export default ToDoList