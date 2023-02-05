import React from "react";
import { useState } from "react";

const AddNewToDo = ({addNewToDo}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);
        if (taskInput === "") {
            return;
        }
        addNewToDo(taskInput);
        setTaskInput("");
    }

    const [showForm, setShowForm] = useState(false);
    const [taskInput, setTaskInput] = useState("");

    const conditionalRender = () => {
        if (!showForm) {
            return <button onKeyDown={e => e.key === 'Enter'} onClick={() => setShowForm(true)}>Create Task</button>
        }
        return (                
            <form onSubmit={(e) => handleSubmit(e)}>
                <input autoFocus type="text" placeholder="task" onChange={(e) => setTaskInput(e.target.value)}></input>
                <button>Add</button>
            </form>
        )
    }

    return conditionalRender()
}

export default AddNewToDo;