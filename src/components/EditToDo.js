import React from "react";
import { useState } from "react";

const EditItem = ({editTask,todo,setShowEdit}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowEdit(false);
        editTask(todo.id, inputValue);
    }
    return (
        <form onSubmit={e=>handleSubmit(e)}>
            <input onChange={e => setInputValue(""+e.target.value)} defaultValue={todo.todo}></input>
            <button>done</button>
        </form>
    )
}

export default EditItem;