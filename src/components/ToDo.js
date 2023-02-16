import React from "react";
import { useState } from "react";
import EditItem from "./EditToDo";

const ToDo = ({ todo, toggle, editTask}) => {
    const [showEdit, setShowEdit] = useState(false);
    const handleEvent = () => {
        toggle(todo.id)
    }

    if (showEdit)
    return (
            <EditItem todo={todo} editTask={editTask} setShowEdit={setShowEdit}></EditItem>
    )
    else
    return (
        <div
            className={todo.done ? "done task-container" : "not-done task-container"}
        >
            <button className="edit-button" onClick={()=>setShowEdit(true)}>edit</button>
            <p className="clickable"
                onClick={e => {
                    handleEvent(e)  
                }}
            >{todo.todo}</p>
        </div>
    )
}

export default ToDo;