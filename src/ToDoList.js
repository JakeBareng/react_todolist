import React from "react";
import ToDo from './ToDo.js'
const ToDoList = ({toDoList,toggle}) => {
    return (
        <div>
            {
                toDoList.map(todo => {
                    return (<ToDo todo={todo} toggle={toggle}/> )
                })

            }
        </div>
    )
} 

export default ToDoList