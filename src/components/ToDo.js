import React from "react";
import { useState } from "react";

const ToDo = ({todo, toggle}) => {
    const handleEvent = () => {
        toggle(todo.id)
    }

    return (
        <div
        className={todo.done?"done task-container":"not-done task-container"} 
        >
            <button className="edit-button">edit</button>
            <p className="clickable" onClick={e => handleEvent(e)}>{todo.todo}</p>
        </div>
    )
}

export default ToDo;