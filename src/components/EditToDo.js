import React from "react";
import { useState } from "react";

const editItem = ({editTask,todo}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit(e)}>
            <input onChange={e => setInputValue(""+e.target.value)}></input>
            <button>done</button>
        </form>
    )
}

export default editItem;